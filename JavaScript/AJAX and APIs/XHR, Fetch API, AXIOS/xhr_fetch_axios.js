// const req = new XMLHttpRequest(); 
// req.onload = function() {
//     console.log("It loaded !");
//     console.log(this); //req will be loaded
//     console.log(this.responseText); //this is a string, we cannot access properties, So we have to convert to object or json format
//     const data = JSON.parse(this.responseText)
//     console.log(data);
//     console.log(data.result.properties.gender, data.result.properties.name);
// }
// req.onerror = function() {
//     console.log("Error !");
//     console.log(this); 
// }
// req.open("GET", "https://swapi.tech/api/people/1/")
// req.send(); 







// we can do the above thing using fetch, it also support promises. 
// const url = "https://swapi.tech/api/people/1/"; 
// fetch(url)
//     // it alswys returns a promise, if resolved then then block will executed, if not then catch block will executed.
//     // we can also do the below thing by nesting using XMLHttpRequest()  
//     .then((res) => {
//         console.log("resolved !", res);
//         return res.json()
//     }) 
//     .then((data) => 
//         {
//             console.log("First JSON request accepted !", data.result.properties);
//             // making second request
//             return fetch("https://swapi.tech/api/people/2/")
//         }
//     )
//     .then((res) => {
//         console.log("Second json request resolved", res);
//         return res.json(); 
//     })
//     .then((data) => {
//         console.log(data.result.properties);
//     })
//     .catch((e) => {
//         console.log("error !", e);
//     })






// const loadStarWarsPeople = async() => {
//     const url1 = "https://swapi.tech/api/people/1/"; 
//     const res1 = await fetch(url1)
//     const data1 = await res1.json(); 
//     console.log(data1);

//     const url2 = "https://swapi.tech/api/people/2/"; 
//     const res2 = await fetch(url2)
//     const data2 = await res2.json(); 
//     console.log(data2);  
// }
// loadStarWarsPeople(); 









// in the above parsing is done differently , so Axios comes in to solve that problem. it is not a part of inbuilt javascript ,so we have to import it from GitHub. Axios is a library made for HTTP request. 
// axios
//   .get("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });


// const starWarsLovers = async() => {
//     try{
//         const res = await axios.get("https://swapi.tech/api/people/1/"); 
//         console.log(res.data.result.properties)
//     }
//     catch(e) {
//         console.log("Error", e);
//     } 
// }
// starWarsLovers(); 


// we can also pass an id 
// const starWarsLovers = async(id) => {
//     try{
//         const res = await axios.get(`https://swapi.tech/api/people/${id}/`); 
//         console.log(res.data.result.properties.name)
//     }
//     catch(e) {
//         console.log("Error", e);
//     } 
// }
// starWarsLovers(6); 




// setting headers with axios
// const jokes = document.querySelector('#jokes'); 
// const button = document.querySelector('button')
// const addNewDadjoke = async () => {
//     const newJoke = await getDadjoke(); 
//     const newLi = document.createElement('LI')
//     newLi.append(newJoke)
//     jokes.append(newLi)
// }
// const getDadjoke = async() => {
//     try{
//         const config = {headers: {Accept: 'application/json'}}
//         const res = await axios.get("https://icanhazdadjoke.com/", config)
//         // console.log(res.data.joke)
//         return res.data.joke; 
//     }
//     catch(e){
//         return "NO jokes are available. Sorry :("
//     }
// }
// // getDadjoke(); 
// button.addEventListener('click' , addNewDadjoke)







// TV show search form using TV show API
const form = document.querySelector("#searchForm")
const searchResultsContainer = document.querySelector("#searchResults");
form.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    // first delete previous serches results
    removeImages();
    console.log("SUBMITTED !");
    const searchTerm = form.elements.query.value; 
    
    // console.dir(searchTerm);
    const config = {params: {q: searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    // console.log(res.data); 
    makeImages(res.data); 
    form.elements.query.value = " ";
    
    // console.log(res.data[0].show.image.medium);
    // const img = document.createElement('IMG')

    // img.src = res.data[0].show.image.medium; 
    // document.body.append(img); 
})

const makeImages = (shows) => {
    // for nonsense serach keywords
    if (shows.length === 0) {
        const para = document.createElement("p");
        para.innerText = "No such TV show found.";
        para.style.color = 'red';
        para.style.fontWeight = 'bold';
        searchResultsContainer.appendChild(para);
        return;
    }
    for(let result of shows){
        // console.log(result);
        const container = document.createElement('div'); 
        if(result.show.image){
            const img = document.createElement('IMG')
            img.src = result.show.image.medium; 
            container.appendChild(img);
        }
        searchResultsContainer.appendChild(container); 
    }
}

const removeImages = () => {
    searchResultsContainer.innerHTML = " "; 
}
