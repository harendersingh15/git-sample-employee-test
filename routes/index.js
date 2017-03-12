/*
 * GET home page.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// exports.index = function(req, res) {
//     res.render('index.html', { title: 'Cloudant Boiler Plate' });
// };
const employee_1 = require("./employee/employee");
const appRouter = (app) => {
    app.use('/employee', employee_1.employeeRouter);
};
exports.appRouter = appRouter;
//# sourceMappingURL=index.js.map