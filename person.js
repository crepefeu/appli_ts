"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, firstName, address) {
        this._lastName = name;
        this._firstName = firstName;
        this._address = address;
    }
    Person.prototype.getLastName = function () {
        return this._lastName;
    };
    Person.prototype.getFirstName = function () {
        return this._firstName;
    };
    Person.prototype.getAddress = function () {
        return this._address;
    };
    Person.prototype.getFullInfos = function () {
        return "".concat(this._firstName, " ").concat(this._lastName, ", ").concat(this._address.getFullAddress());
    };
    Person.prototype.setAddress = function (address) {
        this._address = address;
    };
    return Person;
}());
exports.Person = Person;
