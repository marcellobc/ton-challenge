const uuid = require('uuid');
const ExceptionHelper = require('../../../helpers/ExceptionHelper');
const ObjectHelper = require('../../../helpers/ObjectHelper');
const { DynamoDB } = require('../index');
const dynamoDBInstance = require('./index');

const dbClient = new DynamoDB.DocumentClient({ service: dynamoDBInstance });

class DynamoDBTable {
  constructor(tableName, client) {
    this.client = client ?? dbClient;
    this.tableName = tableName;
  }

  async index() {
    const list = await dbClient.scan({ TableName: this.tableName }).promise();
    return list.Items;
  }

  async create(payload) {
    const now = new Date().toISOString();
    const timestamps = { created_at: now, updated_at: now };
    const Item = { ...payload, ...timestamps, id: uuid.v1() };

    await this.client.put({ TableName: this.tableName, Item }).promise();
    return Item;
  }

  async show(id) {
    const params = { TableName: this.tableName, Key: { id } };
    const result = await dbClient.get(params).promise();
    if (!result.Item) ExceptionHelper.notFound([{ id }]);
    return result.Item;
  }

  async update(id, payload) {
    // check if exists
    const currentItem = await this.show(id);

    if (!Object.keys(payload).length) return currentItem;

    const query = DynamoDBTable.updateBuilder({
      ...payload,
      updated_at: new Date().toISOString(),
    });

    const updated = await this.client
      .update({
        ...query,
        TableName: this.tableName,
        Key: { id },
        ReturnValues: 'ALL_NEW',
      })
      .promise();

    return updated.Attributes;
  }

  async delete(id) {
    // check if exists
    await this.show(id);

    const Key = { id };
    await this.client.delete({ TableName: this.tableName, Key }).promise();
    return { deleted: true };
  }

  static updateBuilder(obj) {
    const objKeys = Object.keys(obj);
    const attributeValues = ObjectHelper.selectKeys(obj, objKeys, ':');

    const keyKeyPair = ObjectHelper.duplicateKey(obj);
    const attributeNames = ObjectHelper.selectKeys(keyKeyPair, objKeys, '#');

    const names = Object.keys(attributeNames);
    const values = Object.keys(attributeValues);

    let expression = 'set ';
    for (let i = 0; i < names.length; i++) {
      expression += `${names[i]}=${values[i]},`;
    }
    expression = expression.substr(0, expression.length - 1);

    return {
      UpdateExpression: expression,
      ExpressionAttributeValues: attributeValues,
      ExpressionAttributeNames: attributeNames,
    };
  }
}

module.exports = DynamoDBTable;
