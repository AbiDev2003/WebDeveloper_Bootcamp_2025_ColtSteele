const container = document.querySelector('#container')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for(let i = 1; i<151; i++){
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon'); //add a div with id pokemon
    const label = document.createElement('span')
    label.innerText = `#${i}` //create element span and text inside is #1, #2 and so on. 
    const newImg = document.createElement('img')
    newImg.src = `${baseURL}${i}.png` //creates a space for image, insert image link like 1.png, 2.png and so on. 
    pokemon.appendChild(newImg)
    pokemon.appendChild(label); //appendchild images and tag inside the div of id pokemon. 
    container.appendChild(pokemon) //add div inside container. 
}

// final results
// <section id = "container">
        //   <div id = "pokemon">
        //     <img src = ""></img>
            //    <span>#i</span>
        //   </div> 

        // goes oo in loops 
// </section>

