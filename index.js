var merge = require('merge');

function collector (keys) {
	keys = keys || ['body', 'params', 'query'];
	return function (req, res, next) {
		var params_all = {};
		keys.forEach(function(key) {
			params_all = merge(params_all, req[key]);
		});
		req.params_all = params_all;
		next();
	}
}

module.exports = collector;