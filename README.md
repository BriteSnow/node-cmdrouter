## Intro

Simple command line router that maps command line arguments to javascript function name and params. Very simple mapping at this point (first param is the method name, subsequent ones are passed as param). 

Note: From v0.2.x now node.js > 8 is required.

Note: From v0.3.x needs to import as `const { router } = require("cmdrouter");` (rather than the 0.2.x  `const router = require("cmdrouter");`)

## usage

_testcmd.js_
```js
const { router } = require("cmdrouter");
// or import { router } from 'cmdrouter'

// create a router instance with the name/function dictionary, 
// and call route() to route from the process.argv
router({_default, helloWorld, hello}).route();

function _default(){
    console.log("no command, _default function executed");
}

function helloWorld(){
    console.log("hello world");
}

function hello(name){
    console.log(`Hello ${name}`);
}

async function asyncWork(){
    var a = yield 12;
    var b = await getPromiseForB(); // returns a promise that will resolve with 8.
    console.log(`a + b = ${a + b}`);
}
```

From command line: 

```sh
> node testcmd
no command, _default function executed
> node testcmd hellowWorld
hello world
> node testcmd hello John
Hello John
> node asyncWork
a + b = 20
```

