
const router = require("../index.js");

router({a,b,c}).route();


function a(){
	console.log("a");
}

async function b(num){
	await wait(500);
	console.log("b-" + num);
}


async function c(){
	await wait(500);
	throw "Something boken";
}


function wait(ms){
	return new Promise((resolve, fail) =>{
		setTimeout(() => resolve(), ms);
	});
}