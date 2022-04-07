// import necessary modules
const http = require('http');
const config = require ('./config')

let server = {}

// create the server
server = http.createServer( (req, res) => {

})

// initialize the server
server.init = function () {

    server.listen( config.http.port, function () {
        console.log('Port listening on ', config.http.port )
    })

}

//export server object
module.exports = server