const sidebar = require("../helpers/sidebar");

var viewModel = {
	images = {
		uniqueId: 1,
		title: "Sample Image",
		description: "None",
		filename: "image1.jpg",
		views: 0,
		likes: 0,
		timestamp: Date.now()
	}
};
module.exports = {
	index: function (req, res) {
		sidebar(viewModel, function (viewModel) {
			res.render('index', viewModel);
		});
	}
};