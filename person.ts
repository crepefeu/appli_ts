import { Address } from './address';

export class Person {

    protected _lastName: string;
    protected _firstName: string;
    protected _address: Address;

    constructor(name, firstName, address) {
        this._lastName = name;
        this._firstName = firstName;
        this._address = address;
    }
    
    getLastName() {
        return this._lastName;
    }

    getFirstName() {
        return this._firstName;
    }

    getAddress() {
        return this._address;
    }

    getFullInfos() {
        return `${this._firstName} ${this._lastName}, ${this._address.getFullAddress()}`;
    }

    setAddress(address) {
        this._address = address;
    }

}