class Pet {
    constructor(name, age){
        this.name = name; 
        this.age = age; 
        console.log("Inside pet constructor !");
    }
    eat(){
        return `${this.name} is eating !`; 
    }
}

class Cat extends Pet{
    constructor(name, age, lifeLeft = 9){
        console.log("Inside Cat constructor !");
        // this.name = name; 
        // this.age = age; 
        super(name, age); //this calls name and age from the parent. So no need to use this keyword again. 
        this.lifeLeft = lifeLeft; 
    }
    meow(){
        return `meow meow !`; 
    }
}

class Dog extends Pet{
    bark() {
        return `bhow bhow !`
    }
}

// const dog = new Dog('dogesh bhai', 7)
// console.log(dog);
// console.log(dog.eat()); 

const cat = new Cat('billy ilish', 7, 10); 
console.log(cat);
console.log(cat.meow()); 
console.log(cat.eat()); 
