function makeColor(r, g, b) {
    // makeColor is the factory function which will produce object with some properties. 
    const color = {}; //this will get returned with assigned properties. 
    color.r = r; 
    color.g = g; 
    color.b = b;
    color.rgb = function (){
        // first it will make sure that it receive the rgb value properly. So use this keyword
        const {r, g, b} = this; 
        return `rgb(${r}, ${g}, ${b})`; 
    }; 
    color.hex = function (){
        // first it will make sure that it receive the rgb value properly. So use this keyword
        const {r, g, b} = this; 
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        ); 
    };  
    return color; 
}

const firstColor = makeColor(35, 255, 150); 
console.log(firstColor.rgb()); 
console.log(firstColor.hex()); 
