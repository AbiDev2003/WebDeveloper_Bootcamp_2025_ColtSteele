# Introduction to React and JSX

React is a popular JavaScript library developed by Meta (Facebook) for building user interfaces.  
It is mainly used to build Single Page Applications (SPAs) with reusable UI components.  
React allows developers to create large web applications that can update and render efficiently  
in response to data changes. It is fast, scalable, and simple.

## Common use cases of React:
- Web apps (like Instagram, Facebook, WhatsApp Web)
- Dashboards and admin panels
- Mobile apps (via React Native)
- E-commerce and blog platforms

## What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript used in React.  
It looks similar to HTML and allows you to write HTML elements inside JavaScript.  
JSX makes it easier to write and add HTML in React.

### Example JSX code:

```javascript
import "./styles.css";

function Greeter() {
  return <h1>HELLO !</h1>;
}

function Dog() {
  return <h1>Woof woof !</h1>;
}

export default function App() {
  return (
    <div className="App">
      <Greeter />
      <Dog />
    </div>
  );
}