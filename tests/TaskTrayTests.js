"use strict";

var fluid = require("universal"),
    jqUnit = require("node-jqunit");

fluid.registerNamespace("gpii.tests.taskTrayTests");


jqUnit.test("Something", function () {
    jqUnit.expect(1);
    jqUnit.assert("We did something");


});
