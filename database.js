// A Lesson has:

// - a unique `id`.
// - a `name`.

// A Hub has:

// - a unique `id`.
// - a `name`.
// - a `lessonId` that connects it to the corresponding Lesson.
// - a `cohort`.


let lessons = [
	{ id: "1", name: "Web API" },
	{ id: "2", name: "Git Flow" },
	{ id: "3", name: "Designing Tanks" },
]

function getLessons() {
	return lessons
}


function getLessonsById(id) {
	return lessons.find(u => u.id === id)
}

function createLesson(data) {
	const payload = {
		id: String(lessons.length + 1),
		...data,
	}

	lessons.push(payload)
	return payload
}

function updateLesson(id, data) {
	const index = lessons.findIndex(u => u.id === id)
	lessons[index] = {
		...lessons[index],
		...data,
	}
	
	return lessons[index]
}

function deleteLesson(id) {
	lessons = lessons.filter(u => u.id != id)
}



let hubs = [
	{ id: "1", name: "Web API", lessonId: "1", cohort: "WebPT18" },
	{ id: "2", name: "CSS", lessonId: "2", cohort: "WebPT19" },
	{ id: "3", name: "NodeJS", lessonId: "3", cohort: "WebPT20" },
];

function getHubs() {
	return hubs;
}

function getHubsById(id) {
	return hubs.find((u) => u.id === id);
}

function createHub(data) {
	const payload = {
		id: String(hubs.length + 1),
		...data,
	};

	hubs.push(payload);
	return payload;
}

function updateHub(id, data) {
	const index = hubs.findIndex((u) => u.id === id);
	hubs[index] = {
		...hubs[index],
		...data,
	};

	return hubs[index];
}

function deleteHub(id) {
	hubs = hubs.filter((u) => u.id != id);
}

module.exports = {
	getLessons,
	getLessonsById,
	createLesson,
	updateLesson,
	deleteLesson,
	getHubs,
	getHubsById,
	createHub,
	updateHub,
	deleteHub,
};