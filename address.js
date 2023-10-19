"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(street, city, zipCode) {
        this._street = street;
        this._city = city;
        this._zipCode = zipCode;
    }
    Address.prototype.getStreet = function () {
        return this._street;
    };
    Address.prototype.getCity = function () {
        return this._city;
    };
    Address.prototype.getZipCode = function () {
        return this._zipCode;
    };
    Address.prototype.setStreet = function (street) {
        this._street = street;
    };
    Address.prototype.setCity = function (city) {
        this._city = city;
    };
    Address.prototype.setZipCode = function (zipCode) {
        this._zipCode = zipCode;
    };
    Address.prototype.getFullAddress = function () {
        return "".concat(this._street, ", ").concat(this._city, ", ").concat(this._zipCode);
    };
    return Address;
}());
exports.Address = Address;
