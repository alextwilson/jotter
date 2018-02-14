var httpServer = require("http-server");
var path = require("path");

var pathToStaticFiles = path.join(__dirname + "/public");

var server = httpServer.createServer({root: pathToStaticFiles});
server.listen(9292);

