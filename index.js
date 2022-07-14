const server = require('@fwd/api')

server.add({
    path: '/',
    action: (req ,res) => res.send("Hello, World")
})

server.start(process.argv[2] || 80, __dirname)
