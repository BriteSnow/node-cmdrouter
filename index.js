


module.exports = { router };

function router(cmds) {
	return {
		route: function () {
			return route(cmds);
		}
	};
}

// Will route the process call to a function contained in the "cmds" object
async function route(cmds) {
	var cmd = (process.argv.length >= 3) ? process.argv[2] : null;
	var params = (process.argv.length >= 4) ? process.argv.slice(3) : [];
	// TODO: probably need to slice the remaining arguments as parameters

	// get the eventual fun for this command name (if empty, try to get the _default method)
	var fn = (cmd) ? cmds[cmd] : cmds["_default"];

	if (fn) {
		try {
			return await fn.apply(null, params);
		} catch (ex) {
			console.log(`FAIL to run ${fn.name}(${params}). Cause:\n${ex}`);
			process.exit(1);
		}
	} else {
		console.log("Wrong command '" + cmd + "' is not a function");
		printCmds();
	}

	function printCmds() {
		var msg = "Commands are:";
		for (var label in cmds) {
			msg += "\n\t" + label;
		}
		console.log(msg);
	}
}