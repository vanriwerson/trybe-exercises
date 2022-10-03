export function greeter(name: string):string {
  return `Olá, ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

// Crie uma nova função para calcular a área de um losango
export function losangle(majDiagonal: number, minDiagonal: number): number {
  return majDiagonal * minDiagonal / 2;
}

// Crie uma nova função para calcular a área de um trapézio
export function trapeze(majBase: number, minBase: number, height: number): number {
  return ((majBase + minBase) * height) / 2;
}

// Crie uma nova função para calcular a área de um círculo
export function circle(radius: number): number {
  return Math.PI * Math.pow(radius, 2);
}