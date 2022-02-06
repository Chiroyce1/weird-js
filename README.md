# fun-with-js
Demonstrating some fun features of JavaScript

### [Magically Closing a Tab](https://chiroyce1.github.io/fun-with-js/close-tab/)
This demonstrates how a link can be clicked, and then the click can be prevented by using a simple function
```js
linkElement.addEventListener("click", (e) => {
  e.preventDefault(); // prevents the link
})
```
