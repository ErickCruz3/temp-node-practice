const os = require('os')

//informacion sobre usuario actual
const user = os.userInfo()
console.log(user)

//Metodo para el retorno de tiempo de activida del sistema en segundos
console.log(`El tiempo de uso del sistma es: ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOS)