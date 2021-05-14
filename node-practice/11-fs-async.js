const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./contenido/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./contenido/second.txt', 'utf8', (err, result) =>{
        if (err) {
          console.log(err)
          return
    }
    const second = result
    writeFile(
    './contenido/result-async.txt', 
    `Aqui esta el resultado : ${first}, ${second}`,
    (err, result) =>{
        if (err){
            console.log(err)
            return
        }
        console.log(result)
    })
    })
})