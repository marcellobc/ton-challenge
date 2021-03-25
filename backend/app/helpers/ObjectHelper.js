class ObjectHelper {
  static deepClone(obj = {}) {
    return JSON.parse(JSON.stringify(obj));
  }

  static selectKeys(obj = {}, keys = [], prefix = '') {
    const clone = this.deepClone(obj);

    const result = {};
    keys.forEach((key) => {
      if (clone[key]) {
        result[prefix + key] = clone[key];
      }
    });

    return result;
  }

  static duplicateKey(obj) {
    const clone = this.deepClone(obj);

    const result = {};
    Object.keys(obj).forEach((key) => {
      if (clone[key]) {
        result[key] = key;
      }
    });

    return result;
  }
}

module.exports = ObjectHelper;
