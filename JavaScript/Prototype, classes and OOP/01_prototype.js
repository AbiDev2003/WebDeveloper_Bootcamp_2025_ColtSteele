// const person = {
    //     greet(){
    //         return "Hello"; 
    //     }
    // }
    // const student = {
    //     name: "Abinash"
    // }
    // Object.setPrototypeOf(student, person); 
    // console.log(student.name); 
    // console.log(student.greet()); //student doesn't have greet(), so it looks up its prototype (person) to find it.



    // example 2
    // console.log(String.prototype); 
    // String.prototype.grumpus = () => {
    //     alert("Go back Simon, AGT !"); 
    // }
    // const cat = "Blue"; 
    // cat.grumpus(); //cat is string type and does not have prototype of grumpus. So it goes to string prototype grumpus according to the prototype chain. 


    // example 3
    // String.prototype.yell = function() {
    //     // console.log(this.toUpperCase());
    //     return `${this.toUpperCase()} omg its you !`;
    // }
    // // "Hello".yell(); 
    // console.log("I love You".yell()); 

    Array.prototype.pop = function() {
        // return `SORRY FOR NOT COMING !`; 
        return `${this}`; 
    }
    console.log([3, 4, 5].pop()); //does not work
    
