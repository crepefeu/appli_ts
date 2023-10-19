export class Address {

    private _street: string;
    private _city: string;
    private _zipCode: string;

    constructor(street, city, zipCode) {
        this._street = street;
        this._city = city;
        this._zipCode = zipCode;
    }

    getStreet() {
        return this._street;
    }

    getCity() {
        return this._city;
    }

    getZipCode() {
        return this._zipCode;
    }

    setStreet(street) {
        this._street = street;
    }

    setCity(city) {
        this._city = city;
    }

    setZipCode(zipCode) {
        this._zipCode = zipCode;
    }

    getFullAddress() {
        return `${this._street}, ${this._city}, ${this._zipCode}`;
    }
}