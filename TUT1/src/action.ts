//exports
export function sayHello(name: string): void {
  console.log(`Hello ${name}!`);
}

export let human = 'susan';

export type Student = {
  name: string;
  age: number;
};

const newPupil: Student = {
  name: 'peter',
  age: 24,
};

export default newPupil;


