import { Person } from "./person";
import { Address } from "./address";
import { Teacher } from "./teacher";

let persons: Array<Person>;
let teachers: Array<Teacher>;

let address1 = new Address("rue de la paix", "Paris", "75000");
let address2 = new Address("rue de la liberté", "Marseille", "13000");
let address3 = new Address("rue de la fraternité", "Lyon", "69000");

let person1 = new Person("Dupont", "Jean", address1);
let person2 = new Person("Martin", "Marie", address2);
let person3 = new Person("Durand", "Pierre", address3);

persons = [person1, person2, person3];

persons.forEach(person => {
    console.log(person.getFullInfos());
});

let teacher1 = new Teacher(person1.getLastName(), person1.getFirstName(), person1.getAddress(), "mathématiques", "agrégé");
let teacher2 = new Teacher(person2.getLastName(), person2.getFirstName(), person2.getAddress(), "physique", "certifié");
let teacher3 = new Teacher(person3.getLastName(), person3.getFirstName(), person3.getAddress(), "philosophie", "agrégé");

teachers = [teacher1, teacher2, teacher3];

teachers.forEach(teacher => {
    console.log(teacher.getFullInfos());
});

person1.setAddress(address2);
console.log(person1.getFullInfos());

teacher1.setAddress(address3);
console.log(teacher1.getFullInfos());