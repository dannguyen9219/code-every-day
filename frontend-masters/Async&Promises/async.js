/*
Asynchronicity in JS

JS is a single threaded language where each line of code is executed in order the code appears, line by line. This creates problems because JS will wait for the code to be executed before the running the next code. Slow code blocks other functions from running.

JS is simply not enough when building apps. We need new pieces. The core JS has 3 main parts: Thread of execution, memory/variable environment, and call stack. We will need to add new components: Web Browser APIs/Node background APIs, Promises, Event loop, Callback/Task queue and micro task queue.

JS cannot run on its own on the web. You would need a web browser. A browser has a lot of tools that JS doesn't have: Dev Tools, Console, Sockets, Network Requests, HTML DOM, Timer. However, JS can utilize these in its code.
Dev Tools
Local Storage - Local Storage
Console - Console
Sockets
Network Requests - Fetch
HTML DOM - Document
Timer - setTimeOut

So a big part of JS isn't JS at all. These were added later.

When you have a bunch of functions running on the browser, there will be a Callback Queue. The App will have the Call Stack and the Callback Queue - code in Global Memory will run first in the Call Stack, and then go to the Callback Queue to see if there is any other code to run. This is called the Event Loop.

This may introduce a problem called Callback Hell - simply passing a function inside another function to be run much later.
*/