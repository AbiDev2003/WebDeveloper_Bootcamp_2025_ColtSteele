# Introduction to AJAX, APIs, and JSON

## Section 1: Introduction to AJAX

### What is AJAX?
AJAX stands for **Asynchronous JavaScript and XML**. It allows web pages to:
- Make HTTP requests **behind the scenes** without reloading the page
- Fetch or send data **asynchronously**
- Update parts of a webpage dynamically

### Key Concepts:
- **Traditional Requests**: Happen when you click links, refresh, or type URLs
- **AJAX Requests**: Triggered by JavaScript code (e.g., infinite scroll, live search)
- **Data Format**: Returns pure data (not full HTML/CSS/JS pages)

### Real-World Examples:
1. **Reddit Infinite Scroll**: New posts load as you scroll (no "Next Page" clicks)
2. **Pitchfork Live Search**: Shows suggestions as you type (makes API calls)

### How to View AJAX:
- Open Chrome DevTools → Network tab
- Clear logs and watch new requests appear during interactions

---

## Section 2: Introduction to APIs

### What is an API?
- **Application Programming Interface**
- A **web service** that provides data when requested
- Returns structured data (usually JSON) instead of HTML pages

### API Examples:
| API | Purpose |
|------|---------|
| Cryptonator | Get cryptocurrency prices |
| OpenWeatherMap | Fetch weather data |
| Twitter API | Post/search tweets programmatically |
| Twilio | Send SMS/emails via code |

### Key Characteristics:
1. **Endpoints**: Specific URLs to request data (e.g., `api.cryptonator.com/api/ticker/btc-usd`)
2. **Data-Only**: Returns minimal information (no styling)
3. **Authentication**: Many require API keys (especially for write operations)

### Traditional vs API Workflow:
| Traditional | API |
|------------|-----|
| Request → HTML/CSS/JS page | Request → JSON data |
| For humans to view | For apps to process |

---

## Section 3: Introduction to JSON

### What is JSON?
- **JavaScript Object Notation**
- Lightweight data format (alternative to XML)
- Easy for both humans and machines to read/write
- Before JSON web used XML format data which used to look like below. 

- XML (eXtensible Markup Language) is a markup language that defines rules for encoding documents in a human-readable and machine-readable format. Unlike JSON, XML uses tags to structure data. 

- AJAX traditionally stands for "Asynchronous JavaScript and XML", but modern AJAX almost always uses JSON instead of XML.

- While "AJAJ" (Asynchronous JavaScript and JSON) would technically be more accurate today, the term AJAX stuck historically—even though JSON replaced XML as the dominant format.
- For more you can follow the link [JSON original documentation](https://www.json.org/json-en.html "Optional Title"). 
- Here is a JSON formatter and validator platform [JSON formatter & validator](https://jsonformatter.curiousconcept.com/# "Optional Title")

```XML
<data>
  <key>value</key>
  <price>9.99</price>
  <inStock>true</inStock>
  <tags>
    <tag>music</tag>
    <tag>vinyl</tag>
  </tags>
  <details>
    <year>2020</year>
  </details>
</data>
```

### JSON Syntax Rules:
```json
{
  "key": "value",  // Must use double quotes
  "price": 9.99,   // Numbers unquoted
  "inStock": true, // Booleans
  "tags": ["music", "vinyl"], // Arrays
  "details": {     // Nested objects
    "year": 2020
  }
}
```
### JSON vs JavaScript Objects
| Feature          | JSON                                  | JS Objects                     |
|------------------|---------------------------------------|--------------------------------|
| Quotes on keys   | Required (double only)                | Optional                       |
| Values allowed   | Strings, numbers, booleans, null, arrays, objects | Any valid JS value       |
| Methods/functions| ❌ Not allowed                        | ✅ Allowed                     |

### Working with JSON in JavaScript:

#### Parse JSON String → JS Object:
- It convert a JSON string to JavaScript object. 
- The real life use case it parsing API responses. 
```JavaScript
const data = JSON.parse('{"price": 9.99}');
console.log(data.price); // 9.99
```
#### Convert JS Object → JSON:
- It converts an JS object/ Array into JSON string. - Real life use case is sending the data to API server. 
- It ignores undefined, functions, and Symbol properties.
- Basically JSON.parse() and JSON.stringify are exactly oppsite to each other. 
```JavaScript
const dog = { name: "Rex", age: 5 , owner: undedined};
const jsonStr = JSON.stringify(dog);
// '{"name":"Rex","age":5}'
```
#### Why JSON Dominates Web APIs:
- More compact than XML
- Native support in JavaScript
- Universally supported across programming languages


