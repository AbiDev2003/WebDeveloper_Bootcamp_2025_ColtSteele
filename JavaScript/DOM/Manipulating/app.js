const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}





// *****************************************************classList***************************************************
// const h2 = document.querySelector('h2');
// h2.getAttribute('class')
// h2.setAttribute('class', 'purple')
// h2.setAttribute('class', 'border')

// let currentClasses = h2.getAttribute('class'); 
// console.log(currentClasses) //border

// h2.setAttribute('class', `${currentClasses} purple`)


// better method , just use a classList
// console.log(h2.classList);
// h2.classList.add('purple');
// h2.classList.remove('purple');
// h2.classList.add('border');
// h2.classList.remove('border');

// h2.classList.contains('border'); //false or true

// h2.classList.toggle('purple'); //apply and remove
// h2.classList.toggle('purple'); 











// ***********************************************************traversing parent child and siblings*******************************************
// const firstBold = document.querySelector('p')
// console.log(firstBold);
// // firstBold.parentElement; //gives p which is the parent element

// const paragraph = firstBold.parentElement
// paragraph.children; 
// paragraph.children[0]; //gives first children
// paragraph.children[0].parentElement 


const squareImg = document.querySelector('.square')
// squareImg.parentElement
// squareImg.children

// console.log(squareImg.nextSibling); //coming text, cause its a window thing, some lines , texts are already there. but cannot be seen in your html file
// console.log(squareImg.nextElementSibling) //this gives the images next to it. 
// simlilarly there are previoussibling and previousElementSibling. 










// ******************************************************append and appendChild****************************************************
// creating a new image
const newImg = document.createElement('img');
newImg.src = "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// now it is not on the page, so we will append it
document.body.appendChild(newImg) //added in the last
newImg.classList.add('square') // now the image will be added in the sqaure class type, going to look like images from square class. 

const newh3 = document.createElement('h3')
newh3.innerText = "I come from appendclass !"
document.body.appendChild(newh3);


// now what is .append() ? 
// p.append('i am a new child coming from append'); 
// const newB = document.createElement('b');
// newB.append('HI !')
// p.prepend(newB); //put new elemet at the beginning. 

// insertAdjacentElement()**********************************
const h2 = document.createElement('h2');
h2.append("Are addorable chicken"); 
// console.log(h2);
const h1 = document.querySelector('h1')
h1.insertAdjacentElement('afterend', h2); 



// *****************************removeChild and remove********************************************
const b = document.querySelector('#banner')
console.log(b);
b.parentElement.removeChild(b);

const img = document.querySelector('img')
img.remove(); 
img.parentElement.removeChild(img);


