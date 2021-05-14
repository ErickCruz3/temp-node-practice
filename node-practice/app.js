const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log(`datos recividos`)
})
customEmitter.on('response', () => {
    console.log(`alguna otra logica aqui`)
})

customEmitter.emit('response')