const EmployeeService = require('./EmployeeService');

class EmployeeController {
  static async index(req, res) {
    const result = await EmployeeService.index();
    return res.send(result);
  }

  static async show(req, res) {
    const result = await EmployeeService.show(req.params.id);
    return res.send(result);
  }

  static async create(req, res) {
    const result = await EmployeeService.create(req.body);
    return res.send(result);
  }

  static async update(req, res) {
    const result = await EmployeeService.update(req.params.id, req.body);
    return res.send(result);
  }

  static async delete(req, res) {
    const result = await EmployeeService.delete(req.params.id, req.body);
    return res.send(result);
  }
}

module.exports = EmployeeController;
