## Intro

Simple command line router that maps command line arguments to javascript function name and params. Very simple mapping at this point (first param is the method name, subsequent ones are passed as param). 

_Supports  generator function with yield and async6 support.__

## usage

_testcmd.js_
```js
const router = require("cmdrouter");

// create a router instance with the name/function dictionary, 
// and call route() to route from the process.argv
router({helloWorld, hello}).route();

function helloWorld(){
    console.log("hello world");
}

function hello(name){
    console.log(`Hello ${name}`);
}

function* asyncWork(){
    var a = yield 12;
    var b = yield getPromiseForB(); // returns a promise that will resolve with 8.
    console.log(`a + b = ${a + b}`);
}
```

From command line: 

```sh
> node testcmd hellowWorld
hello world
> node testcmd hello John
Hello John
> node asyncWork
a + b = 20
```

