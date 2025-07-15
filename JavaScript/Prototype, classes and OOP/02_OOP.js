class Color {
    constructor(name, rgbArray) {
        this.name = name;
        this.r = rgbArray[0];
        this.g = rgbArray[1];
        this.b = rgbArray[2];
        this.calcHSL(); // Precompute HSL
    }

    innerRGB() {
        return `${this.r}, ${this.g}, ${this.b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    hex() {
        const toHex = (val) => val.toString(16).padStart(2, '0');
        return `#${toHex(this.r)}${toHex(this.g)}${toHex(this.b)}`;
    }

    hsl() {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
    }

    opposite() {
        const newHue = (this.h + 180) % 360;
        return `hsl(${newHue}, ${this.s}%, ${this.l}%)`;
    }

    fullSaturation() {
        return `hsl(${this.h}, 100%, ${this.l}%)`;
    }

    calcHSL() {
        // Convert RGB to HSL
        let { r, g, b } = this;
        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r:
                    h = ((g - b) / d + (g < b ? 6 : 0));
                    break;
                case g:
                    h = ((b - r) / d + 2);
                    break;
                case b:
                    h = ((r - g) / d + 4);
                    break;
            }

            h = Math.round(h * 60);
        }

        this.h = h;
        this.s = Math.round(s * 100);
        this.l = Math.round(l * 100);
    }
}

// Example usage
const navColor = new Color('carrot', [230, 126, 34]); //taking name and rgb array. 
const logoColor = new Color('emerald', [46, 204, 113]);

// console.log(navColor); 
// navColor.rgb(); 
// navColor.hex(); 
// document.querySelectorAll('h1')[0].style.backgroundColor = navColor.rgb(); 
// document.querySelectorAll('h1')[1].style.backgroundColor = navColor.rgba(0.8); 
// document.querySelectorAll('h1')[1].style.backgroundColor = navColor.opposite(); 
// document.querySelectorAll('h1')[1].style.backgroundColor = navColor.fullSaturation(); 
// document.querySelectorAll('h1')[0].style.backgroundColor = logoColor.hsl(); 
// document.querySelectorAll('h1')[1].style.backgroundColor = logoColor.hex(); 



