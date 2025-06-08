# JS single threaded or multi-threaded
```
JavaScript is single-threaded — it can do one thing at a time, and it uses something called the call stack to keep track of function calls.
```
## But here is the cool part
### 🔧 How Does It Handle Web APIs, Timers, Events, etc.?
```
Even though JavaScript is single-threaded, browsers (like Chrome) and Node.js provide extra features behind the scenes. These are called:

Web APIs in browsers

C++ APIs / libuv in Node.js
```
#### Simple explanation
```
1. You write code like setTimeout, fetch, or addEventListener.

2. These go to Web APIs (not the JS engine). These run separately in the browser.

3. When they're done, they put a callback into the task queue.

4. The Event Loop checks if the call stack is empty, then moves the callback into the stack.
```
#### 🔄 Flow Example:
```javaScript
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");


Output:
1
3
2
```
#### What happened?
```
1. JS runs console.log("1")

2. setTimeout goes to Web API

3. console.log("3") runs

4. After 1 second, Web API puts the callback into the queue

5. Event Loop adds it to the call stack, then console.log("2") runs
```
## 🧵 Summary:
```
| Feature              | JavaScript Core   | Browser / Node                |
| -------------------- | ---------------   | ----------------------------- |
| Threads              |Single-threaded    | Multi-threaded                |
| Handles Web APIs?    | ❌               | ✅                            |
| Handles async tasks? | ❌               | ✅ (via Event Loop & Web APIs)|
```



