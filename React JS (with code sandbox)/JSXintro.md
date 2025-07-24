# JSX Guide: Components, Linking, and Exercises

## JSX Components and File Linking in React

### Main App Structure (`App.js`)
```Notes
Notes: Make sure to implement the codes below in code sandbox to get the output and practice JSX. 
```

The main component imports and renders other JSX components:

```javascript
import "./styles.css";
import Greeter from "./Greeter";
import Dog from "./Dog"; //we can keep any name , like "Doggy"
// import {Dog} from "./Dog"; //import multiple things by adding curly brackets
// import {Dog, add} from "./Dog";
import LoginForm from "./loginForm";
import Die from "./Die";
import DiceRoll from "./DiceRoll";
import RandomPokemon from "./RandomPokemon";

// add(1, 2)

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello Abinash, You are amazing developer. </h1>
      <h2>Start editing to see magic !</h2>
      <input type="text" /> */}

      {/* to use the Greeter() function we gotta use the below syntax to render it.  */}
      {/* <LoginForm />
      <Greeter />
      <Dog /> */}
      {/* <DiceRoll /> */}

      {/* randome pokemon exercise */}
      <RandomPokemon />
    </div>
  );
}

```
Basic Components
1. Greeter Component (Greeter.js)
```JS
function Greeter() {
  return <h1>HELLO !</h1>;
}
export default Greeter;
```
2. Dog Component (Dog.js)
```JS
function Dog() {
  return (
    <div>
      <p> {1 + 4 + 3 / 4} Woof woof !</p>
      <p>
        Curly brackets in JSX execute JavaScript expressions.
        You can reference variables like "hotelList.price" here.
      </p>
    </div>
  );
}
export default Dog;
```
3. Login Form Component (loginForm.js)
```JS
export default function LoginForm() {
  return (
    <div>
      <input type="password" /> <br />
      <input type="text" />
      <button>Login</button>
    </div>
  );
}
```
### Exercises
#### 1. Random Dice Roll Exercise
- Die Component (Die.js)
```JS
import "./Die.css";
export default function Die() {
  const roll = Math.floor(Math.random() * 6);
  return <h2 className="Die">Die roll: {roll}</h2>;
}
```
- Die CSS (Die.css)
```CSS
.Die {
  color: purple;
}
```
- DiceRoll Component (DiceRoll.js)
```JS
import "./DieRoll.css";
import Die from "./Die";

export default function DiceRoll() {
  return (
    <div className="DieRoll">
      <h1>Dice Roll</h1>
      <Die />
      <Die />
      <Die />
    </div>
  );
}
```
- DiceRoll CSS (DieRoll.css)
```CSS
.DieRoll {
  border: 1px solid black;
  border-radius: 10px;
}

.DieRoll h1 {
  font-weight: 100;
  color: green;
}
```
#### 2. Random Pokemon Generator Exercise
- RandomPokemon Component (RandomPokemon.js)
```JS
import "./RandomPokemon.css";

export default function RandomPokemon() {
  const pokemonNum = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNum}.png`;
  
  return (
    <div className="RandomPokemon">
      <h1>Pokemon #{pokemonNum}</h1>
      <img src={url} alt="" />
    </div>
  );
}
```
- RandomPokemon CSS (RandomPokemon.css)
```CSS
.RandomPokemon {
  border: 1px solid black;
}

.RandomPokemon img {
  width: 150px;
}

.RandomPokemon h1 {
  color: blue;
}
```

## Key JSX Concepts
1. Component Import/Export:

   - Default export: export default Component
   - Named export: export { Component }
   - Import syntax varies accordingly

2. JavaScript in JSX:

    - Use curly braces {} to embed JavaScript expressions
    - Can perform calculations or reference variables

3. Styling:

   - Each component can have its own CSS file
   - Class names become className in JSX
   - Styles are scoped to the component

4. Component Composition:

   - Build complex UIs by combining simple components
   - Parent components can render multiple child components