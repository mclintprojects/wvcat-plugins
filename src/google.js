module.exports = {
	match: /https:\/\/www.google.com/g,
	commands: [
		{
			element: 'search-input',
			match: ['search for *query'],
			onmatch: function(query) {
				window.location.href = `https://www.google.com/search?q=${query}`;
			}
		},
		{
			element: 'im-feeling-button',
			match: ["i'm feeling lucky"],
			onmatch: function() {
				wvcat.execute("click i'm feeling lucky button");
			}
		}
	]
};
