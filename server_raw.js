const http = require("http");

const server = http.createServer((req, res) => {
	//send back a "success" status code
	res.statusCode = 200;
	//tell the browser we are sending back HTML
	res.setHeader("Content-Type", "text/html");
	// send a note
	res.write("<h1>Hello World</h1>");
	//send it to the internet
	res.end();
});
//tell the server where to listen (web servers need
//to be constantly listening if they are not your site is down)
server.listen(8080, () => {
	console.log("server started");
});
