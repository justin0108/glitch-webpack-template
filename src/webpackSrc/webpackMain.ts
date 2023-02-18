import { randomNumber } from './utility';

const myDiv = document.getElementById('my-content') as HTMLDivElement;
myDiv.textContent = `hello world with webpack and node ${randomNumber(0, 100)}`