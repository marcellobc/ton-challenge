const Joi = require('@hapi/joi');
const DynamoDBTable = require('../../../integrations/aws/DynamoDB/Table');
const validate = require('../../../helpers/validate');

const Employees = new DynamoDBTable('employees');

class EmployeeService {
  static createRules() {
    return Joi.object({
      name: Joi.string().min(2).max(100).required(),
      age: Joi.number().min(1).max(120).required(),
      role: Joi.string().min(2).max(100).required(),
    });
  }

  static updateRules() {
    return Joi.object({
      name: Joi.string().min(2).max(100),
      age: Joi.number().min(1).max(120),
      role: Joi.string().min(2).max(100),
    });
  }

  static async index() {
    return Employees.index();
  }

  static async show(id) {
    return Employees.show(id);
  }

  static async create(payload) {
    const data = await validate(payload, this.createRules());
    return Employees.create(data);
  }

  static async update(id, payload) {
    const data = await validate(payload, this.updateRules());
    return Employees.update(id, data);
  }

  static async delete(id) {
    return Employees.delete(id);
  }
}

module.exports = EmployeeService;
