"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_model_1 = require("./employee.model");
const employeeRouter = express_1.Router();
exports.employeeRouter = employeeRouter;
employeeRouter.get('/', (req, res) => {
    employee_model_1.Employee
        .find({})
        .lean()
        .exec()
        .then((result) => {
        res.send(result);
    })
        .catch((err) => {
        res.send(err);
    });
});
employeeRouter.post('/employee', (req, res) => {
    let employee = new employee_model_1.Employee();
    employee.name = req.body.name;
    employee.age = req.body.age;
    employee.mobile = req.body.mobile;
    employee.save((error, data) => {
        if (error) {
            console.log(error);
            throw error;
        }
        res.send(data);
    });
    //res.send('done');
});
//# sourceMappingURL=employee.js.map