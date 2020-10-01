const express = require("express");
const db = require("./database");

const server = express();

server.use(express.json())

// - view a list of existing Lessons.
//COMPLETE
server.get("/lessons", (req, res) => {
	const lessons = db.getLessons();
	res.json(lessons);
});

// - view the details of a single Lesson
//COMPLETE
server.get("/lessons/:id", (req, res) => {
	const id = req.params.id;
	const lesson = db.getLessonsById(id);
	if (lesson) {
		res.json(lesson);
	} else {
		res.status(404).json({
			message: "Lesson not found",
		});
	}
});

// - add a new Lesson.
//COMPLETE
server.post("/lessons", (req, res) => {
	const newLesson = db.createLesson(
		{ id: req.body.id, name: req.body.name }
	);
	res.status(201).json(newLesson);
});

// - update the information of an existing Lesson.
//COMPLETE
server.put("/lessons/:id", (req, res) => {
	const id = req.params.id
	const lesson = db.getLessonsById(id)
	if (lesson) {
		const updatedLesson = db.updateLesson(id, {
			name: req.body.name
		})
		res.json(updatedLesson)
	} else {
			res.status(404).json({
				message: "lesson not found",
			});
	}
});

// - remove a Lesson.
//COMPLETE
server.delete("/lessons/:id", (req, res) => {
	const id = req.params.id;
	const lesson = db.getLessonsById(id);
	if (lesson) {
		db.deleteLesson(id)
		res.status(204).json({
			message: "Lesson Deleted",
		});
	} else {
		res.status(404).json({
			message: "lesson not found",
		});
	}
});

// - view a list of existing Hubs.
//COMPLETE
server.get("/hubs", (req, res) => {
	const hubs = db.getHubs();
	res.json(hubs);
});

// - view the details of a single Hub
// COMPLETE
server.get("/hubs/:id", (req, res) => {
	const id = req.params.id;
	const hub = db.getHubsById(id);
	if (hub) {
		res.json(hub);
	} else {
		res.status(404).json({
			message: "Hub not found",
		});
	}
});

// - add a new Hub.
//COMPLETE
server.post("/hubs", (req, res) => {
	const newHub = db.createHub({
		id: req.body.id, 
		name: req.body.name,
		lessonId: req.body.lessonId,
		cohort: req.body.cohort,
	});
	res.status(201).json(newHub);
});

// - update the information of an existing Hub.
//COMPLETE
server.put("/hubs/:id", (req, res) => {
	const id = req.params.id
	const hub = db.getHubsById(id)
	if (hub) {
const updatedHub = db.updateHub(id, {
	name: req.body.name,
})
res.json(updatedHub)
	} else {
		res.status(404).json({
			message: "hub not found"
		})
	}
});

// - remove a Hub.

server.delete("/hubs/:id", (req, res) => {
		const id = req.params.id;
		const hub = db.getHubsById(id);
		if (hub) {
			db.deleteHub(id);
			res.status(204).json({
				message: "Hub Deleted",
			});
		} else {
			res.status(404).json({
				message: "lesson not found",
			});
		}
});

server.listen(8080, () => {
	console.log("server started");
});
