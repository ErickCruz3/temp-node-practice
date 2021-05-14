const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Bienvenido a nuestra pagina de inicio')
    res.end()
})


server.listen(5000)