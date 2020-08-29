module.exports = {
	newest: function () {
		var comments = {
			image_Id: 1,
			email: "arthur@gmail",
			name: "Arthur Leandro",
			gravatar: "http://lorempixel.com/75/75/animals/1",
			comment: "This is just an normal comment",
			timestamp: Date.now(),
			image: {
				uniqueId: 1,
				title: "Sample Image",
				description: "None",
				filename: "image1.jpg",
				views: 0,
				likes: 0,
				timestamp: Date.now()
			}
		};
		return comments;
	}
};