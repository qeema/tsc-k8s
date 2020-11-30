"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const test = 'world!';
console.log(`Hello ${test}`);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        document.write(`私の名前は${this.name}です。 年齢は${this.age}歳です。`);
    }
}
exports.Person = Person;
