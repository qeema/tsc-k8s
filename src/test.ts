const test = 'world!';
console.log(`Hello ${test}`);

export class Person {
  constructor(public name: string, public age: number) {}

  public greeting(this: Person): void {
    document.write(`私の名前は${this.name}です。 年齢は${this.age}歳です。`);
  }
}
