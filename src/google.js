module.exports = {
	match: /https:\/\/www.google.com/g,
	commands: [
		{
			element: 'search-input',
			match: ['search for *'],
			onmatch: function(query) {
				const input = document.querySelector(
					`input[data-wvcat-id='search-input']`
				);
				input.value = query;
				input.dispatchEvent(new Event('input'));
			}
		}
	]
};
