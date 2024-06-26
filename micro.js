const http = require('http');

/**
 * Author: Omar
 * Represents a micro HTTP server
 * Micro Class
 */

class Micro{
    /**
     * Creates a new Micro instance
     */
    constructor(){
        /**
         * The HTTP sever instance.
         * @type{http.Server}
         * @private
         */
        this.server = http.createServer();
    }
    /**
     * Registers a callback for handling GET requests to a specific path.
     * 
     * @param {string} path - define a path like ->('/PathName')
     * @param {(req:http.IncomingMessage,res:http.ServerResponse<http.IncomingMessage>)=>} cb - The callback function execute when a mathcing GET request is received.
     */
    get(path,cb){
        this.server.on("request", (req,res)=>{
            if(req.url === path && req.method === "GET") cb(req,res);
        })

        this.server.on('request')
    }
    

    put(path,cb){
        this.server.on("request", (req,res)=>{
            if(req.url === path && req.method === "PUT") cb(req,res);
        })
    }

    /**
     * Starts listening on the specified port.
     * @param {number} port - The port to listen on.
     * @param {Function} cb - The callback function to execute when the server starts listening.
     */
    listen(port,cb){
        this.server.listen(port,()=> cb());
    }
}

module.exports = Micro;