const router = require('express').Router();

const EmployeeController = require('./employees/EmployeeController');

router.get('/employees', EmployeeController.index);
router.post('/employees', EmployeeController.create);
router.get('/employees/:id', EmployeeController.show);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.delete);

module.exports = router;
