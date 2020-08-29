module.exports = {
	index: function (req, res) {
		res.send('image');
	},
	create: function (req, res) {
		res.send('THe image:create POST controller');
	},
	like: function (req, res) {
		res.send('The image:like POST controller');
	},
	comment: function (req, res) {
		res.send('The image:comment POST controller');
	},
};