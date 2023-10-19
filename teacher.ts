import { Person } from "./person";

export class Teacher extends Person {

    protected _specialty: string;
    protected _status: string;

    constructor(name, firstName, address, specialty, status) {
        super(name, firstName, address);
        this._specialty = specialty;
        this._status = status;
    }
    
    getSpecialty() {
        return this._specialty;
    }

    getStatus() {
        return this._status;
    }

    setSpecialty(specialty) {
        this._specialty = specialty;
    }

    setStatus(status) {
        this._status = status;
    }

    getFullInfos() {
        return `${super.getFullInfos()}, ${this._specialty}, ${this._status}`;
    }
}