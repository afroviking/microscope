if (Posts.find().count() === 0) {
	Posts.insert ({
		title: 'Introducing Telescope',
		author: 'Mose Adan',
		url: 'http://moseadan.com'
	});
	Posts.insert ({
		title: 'Advanced Meteor',
		author: 'Jimbo',
		url: 'http://google.com'
	});
	Posts.insert ({
		title: 'The Afroviking Quest',
		author: 'Afroviking',
		url: 'http://moseadan.com/showcase'
	});
}