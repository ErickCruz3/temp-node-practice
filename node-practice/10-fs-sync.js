const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./contenido/first.txt', 'utf8')
const second= readFileSync('./contenido/second.txt', 'utf8')

writeFileSync(
    './contenido/result-sync.text', 
    `Aqui esta el resultado : ${first}, ${second}`,
    {flag: 'a'}
)

console.log('hecho con esta tarea')
console.log('comenzando el siguiente')