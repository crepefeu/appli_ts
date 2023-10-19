"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var person_1 = require("./person");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, firstName, address, specialty, status) {
        var _this = _super.call(this, name, firstName, address) || this;
        _this._specialty = specialty;
        _this._status = status;
        return _this;
    }
    Teacher.prototype.getSpecialty = function () {
        return this._specialty;
    };
    Teacher.prototype.getStatus = function () {
        return this._status;
    };
    Teacher.prototype.setSpecialty = function (specialty) {
        this._specialty = specialty;
    };
    Teacher.prototype.setStatus = function (status) {
        this._status = status;
    };
    Teacher.prototype.getFullInfos = function () {
        return "".concat(_super.prototype.getFullInfos.call(this), ", ").concat(this._specialty, ", ").concat(this._status);
    };
    return Teacher;
}(person_1.Person));
exports.Teacher = Teacher;
