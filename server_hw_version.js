const express = require("express")
const db = require("./database")
//instantiate an express server instance
const server = express()

//this allows us to parse request JSON bodies.
server.use(express.json())

server.get("/",(req, res) => {
    res.json({ message: "Hello World"})
})
server.get("/users", (req, res) => {
//simulate a call to the database
    const users = db.getUsers()
    //return this data to the client(browser)
    res.json(users)
});
server.get("/users/:id", (req, res) => {
    const id = req.params.id
	//simulate a call to the database
	const user = db.getUserById(id);
    //return this data to the client(browser)
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({
            message: "User not found",
        })
    }
})
server.delete("/users/:id", (req, res) => {
	const id = req.params.id;
	//simulate a call to the database
	const user = db.getUserById(id);
	//return this data to the client(browser)
	if (user) {
    db.deleteUser(id)
    //204 means a successful empty response
    res.status(204).end()
	} else {
		res.status(404).json({
			message: "User not found",
		});
	}
});
server.put("/users/:id", (req, res) => {
	const id = req.params.id;
	//simulate a call to the database
	const user = db.getUserById(id);
	//return this data to the client(browser)
	if (user) {
        	const updatedUser = db.updateUser(id, {
        name: req.body.name,
            })
            res.json(updaterUser)
        }
     else {
		res.status(404).json({
			message: "User not found",
		});
	}
});

server.post("/users", (req, res) => {
    const newUser = db.createUser({
        name: req.body.name, 
    })
    res.status(201).json(newUser)
})



//tell the server where to listen (web servers need
//to be constantly listening if they are not your site is down)
server.listen(8080, () => {
	console.log("server started");
});
