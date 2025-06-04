// What is the DOM?
// The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, allowing JavaScript to dynamically access and modify content, structure, and styles.


// *****************************************************DOM selection**********************************************

// getelementBYid
// const banner = document.getElementById("banner");  
// console.log(banner); // Returns the <img> element with id="banner"

// // getElementsByTagName() → Selects all elements with a given tag name.
// const images = document.getElementsByTagName("img");  
// console.log(images); // Returns HTMLCollection of all <img> elements

// // getElementsByClassName() → Selects all elements with a given class.
// const squares = document.getElementsByClassName("square");  
// console.log(squares); // Returns HTMLCollection of all elements with class="square"

// // querySelector() → Selects the first matching element using CSS selectors
// const firstLink = document.querySelector("a");  
// console.log(firstLink); // Returns the first <a> tag in the document

// // querySelectorAll() → Selects all matching elements using CSS selectors. 
// const allLinks = document.querySelectorAll("a");  
// console.log(allLinks); // Returns NodeList of all <a> tags

// // innerHTML → Gets or sets the HTML content inside an element.
// const toc = document.querySelector("#toc");  
// console.log(toc.innerHTML); // Returns the HTML inside #toc
// toc.innerHTML += "<p>New paragraph added!</p>"; // Modifies content

// // textContent → Gets or sets the plain text content (ignores HTML tags).
// const h1 = document.querySelector("h1");  
// console.log(h1.textContent); // "Silkie Chickens" (no HTML tags)
// h1.textContent = "New Heading"; // Changes text only

// // innerText → Similar to textContent, but respects styling (e.g., hidden elements).
// console.log(h1.innerText); // "Silkie Chickens"
// h1.innerText = "Updated Heading";  








// *****************************************************************************************************************
// *****************************************************DOM Manipulation*******************************************


// // Modifying Attributes
// const banner = document.getElementById("banner");  
// banner.src = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"; // Changes image source  
// banner.alt = "New Alt Text"; // Changes alt text  



// // Changing Styles****************************************
// const h1 = document.querySelector("h1");  
// h1.style.color = "purple"; // Inline style change  
// h1.style.fontSize = "3rem";  



// classList************************************************
// we can apply or change using getAttribute and setAttribute as well
// const h2 = document.querySelector('h2')
// console.log(h2.getAttribute('class'))
// h2.setAttribute('class', 'purple')
// h2.setAttribute('class', 'border') //both classes purple and border is not applyied, border will get overwrite. 
// let currentClass = h2.getAttribute('class') //border
// h2.setAttribute('class', '${currentClass} purple') //now it is gonna work we can set both purple and border class property in h2. 

// we can do above uing classlist easily 
// h2.classList.add('purple')
// h2.classList.add('border') //this is not gonna overwrite purple, just like pushig in an array
// h2.classList.remove('border') //border class will be removed
// h2.classList.contains('border') //false (does this classlist contains border in h2 or not)
// h2.classList.contains('purple') //true (does this classlist contains purple in h2 or not)
// h2.classList.toggle('purple') //adds and remove purple class property by running again and again




// traversing parent/child/siblings***************************************
// const firstBold = document.querySelector('b')
// console.log(firstBold); //<b>Silkie</b>
// console.log(firstBold.parentElement) //<p>...</p>
// console.log(firstBold.parentElement.parentElement) //<body>...</body>

// const paragraph = firstBold.parentElement
// console.log(paragraph.children) //you can get the children elements
// console.log(paragraph.children[0]) //you can get first child elements

// const squareImg = document.querySelector('.square')
// console.log(squareImg.nextSibling) //gives the text which is assigned by chrome/browser like wide spaces, inlines textnodes etc.., but not present in your html file. so there is no real values in it. 
// console.log(squareImg.previousSibling); //gives text nodes as before
// console.log(squareImg.nextElementSibling); //gives the image
// console.log(squareImg.previousElementSibling); //gives the paragraph




// append, appenchild***********************************************************

// appendChild()  → Adds only a single node 
// const newImg = document.createElement('img')
// console.dir(newImg) //you wil see that sourse src is missing
// newImg.src = "https://media.istockphoto.com/id/1998660059/photo/ai-artificial-intelligence-security-sentinel-password-cyber-security-ransomware-email.jpg?s=2048x2048&w=is&k=20&c=e2cQOJS-_HY2QxP7yZfi9xO55XW2yCXFkVlMnzOEwhU="
// // it isnot displayed in the page yet, so we have to append or appendchild
// document.body.appendChild(newImg) //gts appended as a last child of the body
// // we also can change inside which class it wil gets appended, so that it can access the properties/styles of same class
// newImg.classList.add('square')

// const newH3 = document.createElement('h3')
// newH3.innerText = 'i am new'
// document.body.appendChild(newH3)

// // append - allows to append more than one thing at a time(like strings), more dynamic. 
// const p = document.querySelector('p')
// p.append('i am new paragraph') //appends to the end of the paragraph section, but you cannot add like this in apendchild

// // prepend()
// const newB = document.createElement('b')
// newB.append('HI !')
// p.prepend(newB) //bold tag with text "HI !" is added as a first child in the paragraph

// // insertAdjacentElement()
// const h2 = document.createElement('h2')
// h2.append('Are adorable chickens')
// const h1 = document.querySelector('h1')
// h1.insertAdjacentElement('afterbegin', h2)
// h1.nextElementSibling; //h2

// // after
// const h3 = document.querySelector('h3')
// h3.innerText = 'which looks silky'
// h1.after(h3) //inserts after h1




// remove, removeChild()*************************************************
// removechild() -> gets called on the parent element
const firstLi = document.querySelector('li')
const ul = firstLi.parentElement
ul.removeChild(firstLi); //first list get removed
const b = document.querySelector('b')
b.parentElement.removeChild(b)

// remove() -> gets called on the removed element or respective node
const img = document.querySelector('img')
img.remove(); 




