// function makeColor(r, g, b) {
//     const color = {}; //this will get returned with assigned properties. 
//     color.r = r; 
//     color.g = g; 
//     color.b = b;
//     color.rgb = function (){
//         // first it will make sure that it receive the rgb value properly. So use this keyword
//         const {r, g, b} = this; 
//         return `rgb(${r}, ${g}, ${b})`; 
//     }; 
//     color.hex = function (){
//         // first it will make sure that it receive the rgb value properly. So use this keyword
//         const {r, g, b} = this; 
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         ); 
//     };  
//     return color; 
// }
// // You're creating methods like .hex() and .rgb() inside each object created by makeColor():
// // Every time you call makeColor(), you are creating a brand new .rgb and .hex function in memory, even if the logic is exactly the same. So we have to use constructor fubnction

// const firstColor = makeColor(35, 255, 150); 
// // console.log(firstColor.rgb()); 
// // console.log(firstColor.hex()); 
// const black = makeColor(0, 0, 0); 
// console.log(firstColor.hex === black.hex); //false
// console.log("hi".slice === "bye".slice); // but in general case both would be true, as the slice methods are decalred inside prototype, not directly in the function. 







// construtor function *******************************************************************
function Color(r, g, b){
    this.r = r; 
    this.g = g; 
    this.b = b;
    console.log(this);  
}
Color.prototype.rgb = function(){
    const {r, g, b} = this; 
    return `rgb(${r}, ${g}, ${b})`; 
}
Color.prototype.hex = function(){
    const {r, g, b} = this; 
    return (
        '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );  
}
Color.prototype.rgba = function(a = 0.5){
    const {r, g, b} = this; 
    return `rgba(${r}, ${g}, ${b}, ${a})`; 
}

const color1 = new Color(255, 40, 100); //if we dont use new keyword it is going to refer to window object
const color2 = new Color(0, 0, 0); 

 
// document.body.style.backgroundColor = color1.rgb(); 
document.body.style.backgroundColor = color1.rgb(0.2); 

