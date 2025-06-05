// ********************************inline events like onclick and ondblclick ************************************************
// refer the html code






// **********************************events like onclick, onmnouseenter etc...******************************************
// const btn = document.querySelector('#btn4')
// btn.onclick = function () {
//     console.log('you cliked me');
//     alert('you clicked button 04')
// }

// function scream(){
//     alert('aaaaHHHHHH! stop touching me')
// }
// btn.onmouseenter = scream

// document.querySelector('h1').onclick = () => {
//     alert('you clicked the h1 !')
// }








// ************************************************addEventListener and callback************************************************
// const btn3 = document.querySelector('#btn3')
// btn3.addEventListener('click', function(){
//     alert('clicked btn 3')
// })
// // mouseup, mousedown, change, input can be used almostWhole. They are also some events 
// btn3.addEventListener('click', scream)

// // onclick cannot be overridddn i.r we cannot call two functions at a time, but in addevent listener we can
// const tasButton = document.querySelector('tas')
// function twisted() {
//     console.log('i am twisted !')
// }
// // tasButton.addEventListener('click', twisted)
// // tasButton.addEventListener('click', scream)
// tasButton.addEventListener('click', twisted, {once: twisted}) //this will run only one time(for the first time) and after next clicks only scream will execute
// tasButton.addEventListener('click', scream)










// ****************************************Events and this keyword***********************************************
// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }
// const buttons = document.querySelectorAll('button')
// const h1s = document.querySelectorAll('h1')
// for(let button of buttons){
//     // button.addEventListener('click', function(){
//     //     // console.log('clicked');
//     //     button.style.backgroundColor = makeRandColor()
//     //     button.style.color = makeRandColor()
//     // })
    
//     // just call the colorize function
//     button.addEventListener('click', colorize)
    
// }
// for(let h1 of h1s){
//     // h1.addEventListener('click', function() {
//     //     h1.style.backgroundColor = makeRandColor()
//     //     h1.style.color = makeRandColor()
//     // })
//     // call colorize function instead
//     h1.addEventListener('click', colorize)
// }

// // /as we can see from above that button and h1 has simliar changes, so we can make a generic function and apply it. 
// function colorize(){
//     this.style.backgroundColor = makeRandColor();
//     this.style.color = makeRandColor()
// }









// ***************************************************Keyboard events and event objects************************************
// document.querySelector('button').addEventListener('click', function(evt){
//     console.log(evt); //shows wat kind of event is triggred and it's properties. Evt is nothing but an event object. 
// })

// const input = document.querySelector('input')
// input.addEventListener('keydown', function() {
//     console.log('keydown'); //comes while pressing the key
// })
// input.addEventListener('keyup', function() {
//     console.log('keyup'); //comes while releasing the key
// })

// input.addEventListener('keyup', function(e) {
//     console.log(e.key); //comes what you typed inside input box 
//     console.log(e.code); //comes what is that respective key code
// })

// window.addEventListener('keydown', function(e){
//     switch(e.code){
//         case 'ArrowUp' : 
//         console.log('arrow up key pressed !')
//         break; 
//         case 'ArrowDown' : 
//         console.log('arrow down key pressed !')
//         break; 
//         case 'ArrowLeft' : 
//         console.log('arrow left key pressed !')
//         break; 
//         case 'ArrowRight' : 
//         console.log('arrow right key pressed !')
//         break; 
//         default: 
//         console.log('default key pressed')
//     }
// })









// *****************************************************NEW VERSION: form events and PreventDefault************************
// const form = document.querySelector('#shelterForm')
// const input = document.querySelector('#catName')
// const list = document.querySelector('#cats')
// form.addEventListener('submit', function(e) {
    //     e.preventDefault(); 
    //     console.log('submitted the form')
    //     const catName = input.value
    //     console.log(catName)
    //     // now take the input, craete li, append into Li and lastly append into ul
    //     const newLi = document.createElement('LI')
    //     newLi.append(catName)
    //     list.append(newLi)
    //     input.value = ''
    // })
    
    
    






// ***************************************OLD and more advanced VERSION: form events and PreventDefault************************
// const tweetForm = document.querySelector('#tweetForm')
// const list = document.querySelector('#list')
// tweetForm.addEventListener('submit', function(e){
//     e.preventDefault(); 
//     // console.log('submitted !')

//     // method 1
//     // const usernameInput = document.querySelectorAll('input')[0]
//     // const tweetInput = document.querySelectorAll('input')[1]
//     // const username = usernameInput.value;
//     // const tweet = tweetInput.value;
//     // const newLi = document.createElement('LI')
//     // newLi.append(`${username} tweeted ${tweet}`)
//     // list.append(newLi)
//     // usernameInput.value = ''
//     // tweetInput.value = ''
    
//     // Method 2
//     // goto console and type console.dir(tweetForm), you are gonna find an elements section
//     const usernameInput = tweetForm.elements.username; 
//     const tweetInput = tweetForm.elements.tweet; 
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = ''
//     tweetInput.value = ''
// })
// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('Li')
//     const bTag = document.createElement('b')
//     bTag.append(username)
//     newTweet.append(bTag)
//     newTweet.append(` - twitted - ${tweet}`)
//     list.append(newTweet)
// }







// ***********************************************'input' and 'change' events *********************************************
// const input = document.querySelector('input')
// const h1 = document.querySelector('h1')
// input.addEventListener('change', function(e) {
//     //only changed text will trigger console.log
//     console.log('changed')
// })

// input.addEventListener('input', function() {
//     // when any thing is texted inside console will trigger
//     console.log('input event')
//     // we can also change h1 according to it
//     h1.innerText = input.value; 
// })








// ************************************************Event bubbling **************************************************
// const button = document.querySelector('#changeColor');
// const container = document.querySelector('#container');

// button.addEventListener('click', function (e) {
//     container.style.backgroundColor = makeRandColor();
//     // if we click on the button, then hidiing work is oing that is it is moving or bubbling upwards and entire div is hiding. So we have to use stopPropagation. 
//     e.stopPropagation();
// })
// container.addEventListener('click', function () {
//     container.classList.toggle('hide');
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }








// ***********************************************Event delegation()*****************************************

// const lis = document.querySelectorAll('li')
// for(let li of lis){
//     li.addEventListener('click', function(){
//         li.remove()
//     })
// } //this delete all the lis only and not so convinient, it deletes only the li inside the ul (present before)



const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetContainer.append(newTweet);
};

tweetContainer.addEventListener('click', function(e){
    if (e.target.nodeName === 'LI') {
        e.target.remove();
    }
});


