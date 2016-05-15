const run = require("async6").run;

module.exports = function(cmds){
	return {route: function(){
		return route(cmds);
	}
	};
};

// Will route the process call to a function contained in the "cmds" object
function route(cmds){
	var cmd = (process.argv.length >= 3)? process.argv[2] : null;
	var params = (process.argv.length >= 4)? process.argv.slice(3): [];
	// TODO: probably need to slice the remaining arguments as parameters

	if (!cmd){
		printCmds();
	}else{
		var fn = cmds[cmd];
		if (fn){
			//console.log(" will execute cmd ", cmd, "with constructuor name", fn.constructor.name);
			
			if (fn.constructor.name === 'GeneratorFunction'){
				return run(fn.apply(null,params));
			}else{
				return fn.apply(null,params);	
			}
			
		}else {
			console.log("Wrong command '" + cmd + "' is not a function");
			printCmds();
		}	
	}

	function printCmds(){
		var msg = "Commands are:";
		for (var label in cmds){
			msg += "\n\t" + label;
		}
		console.log(msg);
	}	
}