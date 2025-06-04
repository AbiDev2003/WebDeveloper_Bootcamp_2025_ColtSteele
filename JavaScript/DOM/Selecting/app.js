



// *************************************************************getElementById()***********************************************8
// const banner = document.getElementById('banner')
// console.log(banner); //it gives the first element with id banner
// const toc = document.getElementById('toc')
// console.log(toc);

 




// ******************************************************************getEleemntByTagName()************************************************
// all elements with tag name img will be selected
const allImages = document.getElementsByTagName('img')
// console.log(allImages);

for(let img of allImages){
    // console.log(img.src); // it will give the source of all images, means link of the image
    // we can manipulate the src and set it all same
    // img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg" //all the images have changed into chicken image
}







// ****************************************************getElementsByClassName()************************************************
// const squareImg = document.getElementsByClassName('square')
// console.log(squareImg); // it will give all the elements with class square
// for(let img of squareImg){
//     img.src = "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8fDA%3D" // all the images with class square will change into chicken image
// } //only the images with class square will change into tiger image








// **********************************************************querySelector()************************************************
// const firstpara = document.querySelector('p') // it will give the first paragraph element, only the first matching element
// console.log(firstpara);
// document.querySelector('#banner');

//*****************************************querySelectorAll()************************************************
// const allParagraphs = document.querySelectorAll('p') // it will give all the paragraph elements
// console.log(allParagraphs); // it will give a NodeList of all the paragraph elements

// const link = document.querySelectorAll('p a') // it will give all the anchor elements inside paragraph elements
// for (let links of link){
//     console.log(links.href); // it will give the href of all the anchor elements inside paragraph elements
// }






// ***********************************a few methods in DOM ***************************************************
// const h1 =  document.querySelector('h1')
// console.log(h1);


// ***************************************innerText***********************************************
// const textpara = document.querySelector('p').innerText
// console.log(textpara);
// // now we will change the content
// const textchanged = document.querySelector('p').innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas expedita odio totam voluptas eaque vel provident possimus qui itaque quo beatae impedit, sunt nesciunt aliquid perferendis distinctio! Nemo et debitis unde illum quo nobis sed suscipit. Maiores ipsam delectus provident rerum aliquam! Autem quas ab fugiat nobis laborum voluptas?'
// console.log(textchanged);




// ***************************************textContent***********************************************
// const textContent = document.querySelector('p').textContent
// console.log(textContent) // return every pieces of content is showed including paragraph and linespaces

// const allLinks = document.querySelectorAll('a')
// for(let link of allLinks){
//     link.innerText = 'i m a link'
// }

// document.querySelector('h1').innerText = '<i>i am Abinash the coder</i>' //this is not treated a html, but a text line. So there is innerHTML function. 





// ************************************************innerHTML********************************************
// gives everything inside the html, including tagnae, br or para graph. Looks like an html file
// const h1HTML = document.querySelector('h1').innerHTML
// console.log(h1HTML);
// const pHTML = document.querySelector('p').innerHTML
// console.log(pHTML);

// document.querySelector('h1').innerHTML = '<i>I am Abinash the coder</i>'






//*******************************************attributes******************************************** */
// const a = document.querySelector('#banner').src;
// console.log(a);
// const b = document.querySelector('a').href;
// console.log(b);
// const c = document.querySelector('a').title;
// console.log(c);


// we can use some methods to get any kind of attribute, 
// ***************************************getAttributes******************************************* 
// const a = document.querySelector('#banner').getAttribute('src');
// console.log(a);

// or
// const a = document.querySelector('#banner')
// console.log(a.getAttribute(src))
// *****************************************setAttributes*************************************
// const firstLink = document.querySelector('a')
// firstLink.setAttribute('href', 'https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById')

// const input = document.querySelector('input[type = "text"]')
// console.log(input.type)
// input.type = 'password'
// input.type = 'color'




// *************************************************changing styles******************************************
// style object does not content any current style. If h1 has some style in external css file, it wont show in console. But if the style is inline then it can be seen in console. 
// const h1 = document.querySelector('h1');
// console.log(h1.style.color); //empty

// h1.style.color = 'green';
// h1.style.fontSize = '3em';


const allLinks = document.querySelectorAll('a');
// for(let link of allLinks){
//     link.innerText = 'I AM A LINK !';
// }

for(let link of allLinks){
   link.style.color = 'green';
   link.style.textDecorationColor = 'magenta';
   link.style.textDecorationStyle = 'wavy';
}


// to see some defaults
// window.getComputedStyle(h1).color 
// window.getComputedStyle(h1).fontSize 
// window.getComputedStyle(h1).fontFamily 


 









