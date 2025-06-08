// ********************************************01_Call stack**************************************************
// const multiply = (x, y) => x*y;
// const square = x => multiply(x, x)
// const isRightTriangle = (a, b, c) => (square(a) + square(b) === square(c))
// // see the md file for call stack understanding. 
// isRightTriangle(3, 4, 5);







// **************************************************02_web API and single threaded************************************
// see "02_webAPI_single_threading.md" for better understanding
// console.log('sending request to the server')
// setTimeout(() => {
//     console.log('after coming back from web API')
// }, 2000)
// console.log('this got executed right away. End of file')








// *******************************************03_callbacks extras********************************************
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
// }, 1000);
// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange'
// }, 2000);
// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow'
// }, 3000);

// we can do above things by nesting
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red' //first executed
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue'
//                 }, 1000)
//             }, 1000);
//         }, 1000);
//     }, 1000)
// }, 1000);

// we can do the above by making a function
// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//           document.body.style.backgroundColor = newColor; 
//           doNext && doNext(); //If doNext exists (is not undefined or null or false), then call the function doNext().
//         //   we can write like this as well
//         if(doNext) doNext(); 
//     }, delay)
// }
// delayedColorChange('red', 1000, ()=> {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000)
//             })
//         })
//     })
// })

// passing multiple callbacks, also with success and failure condition
// searchMoviesAPI('amadeus', () => {
//     // this will run if api works
//     saveToMyDB(movies, ()=> {
//         // if it works, run this: 
//     }, () => {
//         // if it does not work, this will run: 
//         // but what if this too does not run, then we have to pass another callbacks in failure and so one. This callbck hell is a problem in javaScript. So promise syntax is there
//     })
// }, () => {
//     // iF api IS DOWN, request failed
// })









// *******************************************************Promises**********************************************
// const { resolve } = require("chart.js/helpers"); //this is a auto import line, dont need to worry about it. just comment it out. 
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500; 
//     setTimeout(() => {
//         if(delay > 4000){
//             failure(`connection time out :(`)
//         }else{
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay);
// }

// to run this function we have to comment out that resolve, require line. 
// fakeRequestCallback('books.com', function(response){
//     console.log('it worked !!!');
//     console.log(response)
//     // we can do more call back as well. 
//     fakeRequestCallback('books.com/page2', function(response){
//         console.log('it worked !!!');
//         console.log(response)
//         // we can do more call back as well. 
//     }, function(err) {
//         console.log('error ! :( for page 2,', err)
//     })
// }, function(err) {
//     console.log('error ! :(,', err)
// })



// we can do similar thing as above using Promise as well, but it needs .then() and .catch() nesting.**********
// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500; 
//         setTimeout(() => {
//             if(delay > 4000){
//                 reject(`connection time out :(`)
//             }else{
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay);
//     })
// }

// if the url request worked then, 'then' will run other wise 'catch' is gonna run if rejected. (nested then and catch)
// const request = fakeRequestPromise('yelp.com/api/coffee/page1')
// request
//     .then(() => {
//         console.log('Promise resolved')
//         console.log('It worked !!!')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('Promise resolved [02]')
//                 console.log('It worked !!! [02]')
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('Promise resolved [03]')
//                         console.log('It worked !!! [03]')
//                     })
//                     .catch(() => {
//                         console.log('Promise rejected [03]')
//                         console.log('Oh no, error !!! [03]')
//                     })
//             .catch(() => {
//                 console.log('Promise rejected [02]')
//                 console.log('Oh no, error !!! [02]')
//             })
//         })
//     })
//     .catch(() => {
//         console.log('Promise rejected')
//         console.log('Oh no, error !!!')
//     })
//     .finally(() => {
//         console.log('This is gonna run anyway, everytime !!!')
//     })



// shortcut for promise, instead of nesting then and catch**************************
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log('It worked !! page 1')
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log('It worked !! page 2')
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log('It worked !! page 3')
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page4')
//     })
//     .catch(() => {
//         console.log('On no ! Request failed !');
//     })
    

// Creating our own promise ********************************************
// new Promise((resolve, reject) => {
//     // resolve()
//     reject()
// })

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random(); 
//         setTimeout(() => {
//             if(rand < 0.7){
//                 resolve('your fake data here');
//             }
//             reject('request error !')
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log('done with request !')
//         console.log(`data is ${data}`);
//     })
//     .catch((err) => {
//         console.log('Oh no !', err);
//     })

// Example 2
// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color; 
//             resolve('All good !'); 
//         }, 1000)
//     })
// }

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000)) 
//     .then(() => delayedColorChange('purple', 1000))
//     .then(() => delayedColorChange('magenta', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))









// *********************************************************Async ********************************************************
// async is a syntactical sugar. 
// It returs a promise implicitly always, you dont have to write return explicitly
// if the function throw an exception the promise will be rejected. 
// async function hello() {
//     //a promise will be returned automatically
// }
// const sing = async () => {
//     // promise returns the statement below if it get resolved. 
//     return 'you can ask the flowers, i sit for hours'
// }
// sing().then((data) => {
//     console.log(`Promise resolved with ${data}`)
// })

// throwing error (we can make it customized as well)
// const sing = async() => {
//     // throw new Error('Oh no error')
//     throw 'oh no ! Problem found'
//     return 'you can ask the flowers, i sit for hours'
// }
// sing()
//     .then(data => {
//         console.log('Promise resolved with', data);
//     })
//     .catch(err => {
//         console.log('Promise rejected with', err);
//     })

// const login = async (username, password) => {
//     // both username and password should be valid
//     if(!username || !password) throw 'invalid credintals'
//     // if password matches then resolved
//     if(password === 'abiDev2003') return 'welcome !'
//     // if password does not match then passowrd error
//     throw 'Invalid password'
// }
// login('Abi_the_man')
// .then(msg => {
//     console.log('logged in');
//     console.log(msg);
// })
// .catch(err => {
//     console.log('error');
//     console.log(err);
// })









// *****************************************************Await ***************************************************
// we can only write await keyword inside async functions, await function will pause the execution of the function. waiting for a promise to be resolved. 
// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color; 
//             resolve('All good !'); 
//         }, 1000)
//     })
// }

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000)) 
//     .then(() => delayedColorChange('purple', 1000))
//     .then(() => delayedColorChange('magenta', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

// async function rainbow(){
//     // first the page will turn to red after 1 sec and after this process completed, console.log will run. 
//     // await delayedColorChange('red', 1000)
//     // console.log('HI !!!!')
//     // await delayedColorChange('yellow', 1000)
//     // console.log('Bye !!!!')
        
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('purple', 1000)
//     await delayedColorChange('magenta', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000).then(msg => console.log(msg))
//     return `all done !!`
// }
// rainbow().then((data) => {
//     console.log(data);
//     console.log('end of rainbow !');
// })
// instead of .then like above we can just write another async function to run for printing the rainbow()
// async function printRainbow() {
//     await rainbow(); 
//     console.log('end of rainbow !');
// }
// printRainbow()

// what if a promise is rejected in async functions/ Handling errors in async functions using try, catch(e)
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500; 
        setTimeout(() => {
            if(delay > 4000){
                reject(`connection time out :(`)
            }else{
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay);
    })
}
async function makeTwoRequests() {
    try{
        let data1 = await fakeRequest('/page1')
        console.log(data1)
        let data2 = await fakeRequest('/page2')
        console.log(data2)
    }catch(e){
        console.log('caught an error');
        console.log('Error', e);
    }
}