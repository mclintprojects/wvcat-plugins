const google = require('./domains/google');

module.exports = function() {
	const plugins = [...google];

	this.initialize = function(wvcat, url) {
		const plugin = plugins.find(p => p.match.test(url));
		if (plugin) {
			plugin.commands.forEach(c => {
				c.match.forEach(m => {
					wvcat.addCustomCommand(c.element, m, c.onmatch);
				});
			});
		}
	};
};
