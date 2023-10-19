"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var address_1 = require("./address");
var teacher_1 = require("./teacher");
var persons;
var teachers;
var address1 = new address_1.Address("rue de la paix", "Paris", "75000");
var address2 = new address_1.Address("rue de la liberté", "Marseille", "13000");
var address3 = new address_1.Address("rue de la fraternité", "Lyon", "69000");
var person1 = new person_1.Person("Dupont", "Jean", address1);
var person2 = new person_1.Person("Martin", "Marie", address2);
var person3 = new person_1.Person("Durand", "Pierre", address3);
persons = [person1, person2, person3];
persons.forEach(function (person) {
    console.log(person.getFullInfos());
});
var teacher1 = new teacher_1.Teacher(person1.getLastName(), person1.getFirstName(), person1.getAddress(), "mathématiques", "agrégé");
var teacher2 = new teacher_1.Teacher(person2.getLastName(), person2.getFirstName(), person2.getAddress(), "physique", "certifié");
var teacher3 = new teacher_1.Teacher(person3.getLastName(), person3.getFirstName(), person3.getAddress(), "philosophie", "agrégé");
teachers = [teacher1, teacher2, teacher3];
teachers.forEach(function (teacher) {
    console.log(teacher.getFullInfos());
});
person1.setAddress(address2);
console.log(person1.getFullInfos());
teacher1.setAddress(address3);
console.log(teacher1.getFullInfos());
