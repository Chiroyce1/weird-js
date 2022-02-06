# fun-with-js
Demonstrating some fun features of JavaScript

### [Magically Closing a Tab](https://chiroyce1.github.io/fun-with-js/close-tab/)
This demonstrates how a link can be clicked, and then the click can be prevented by using a simple function
```js
linkElement.addEventListener("click", (e) => {
  e.preventDefault(); // prevents the link from being clicked
})
```
and then, opening a new tab (using `window.open`) and closing it after a while. Users might think this is a link that takes them to the new page but it actually is a new `window` object made by JavaScript, when we got input from the user, we cancelled it and used it for another purpose. Kinda scary but fun at the same time.
