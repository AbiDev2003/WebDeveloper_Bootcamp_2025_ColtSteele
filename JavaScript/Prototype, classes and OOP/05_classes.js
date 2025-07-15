// constructor function
// function Color(r, g, b){
//     this.r = r; 
//     this.g = g; 
//     this.b = b;
//     console.log(this);  
// }
// Color.prototype.rgb = function(){
//     const {r, g, b} = this; 
//     return `rgb(${r}, ${g}, ${b})`; 
// }
// Color.prototype.hex = function(){
//     const {r, g, b} = this; 
//     return (
//         '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     );  
// }
// Color.prototype.rgba = function(a = 0.5){
//     const {r, g, b} = this; 
//     return `rgba(${r}, ${g}, ${b}, ${a})`; 
// }

// const color1 = new Color(255, 40, 100); //if we dont use new keyword it is going to refer to window object
// const color2 = new Color(0, 0, 0); 

 
// // document.body.style.backgroundColor = color1.rgb(); 
// document.body.style.backgroundColor = color1.rgb(0.2); 





// we can write the above things using class as well. Group everything together.  
class Color {
    constructor(r, g, b, name) {
        // console.log(`Inside constructor`);
        // console.log(r, g, b);
        this.r = r; 
        this.g = g; 
        this.b = b; 
        this.name = name; 
    }
    innerRGB(){
        const {r, g, b} = this; 
        return `${r}, ${g}, ${b}`; 
    }
    rgb(){
        // const {r, g, b} = this; 
        // return `rgb(${r}, ${g}, ${b})`;

        // insted of above we can call using innerRGB also
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0){
        return `rgba(${this.innerRGB()}, ${a})`; 
    }
    hex(){
        const {r, g, b} = this; 
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
    greet(){
        return `HELLO FROM ${this.name}`; 
    }
}

const c1 = new Color(255, 67, 89, 'tomoto'); 
console.log(c1.greet());
console.log(c1.hex());
const white = new Color(255, 67, 89, 'white'); 
console.log(white.hex());

document.body.style.backgroundColor = white.rgba(0.5); 






