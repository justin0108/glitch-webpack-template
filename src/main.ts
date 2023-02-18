import { randomNumber } from './utility';

const myDiv = document.getElementById('my-content') as HTMLDivElement;
myDiv.textContent = `hello world ${randomNumber(0, 100)}`