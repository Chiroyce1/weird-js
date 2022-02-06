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


### [Faking copying some text](https://chiroyce1.github.io/fun-with-js/fake-copy/)
This demonstrates how whatever you copy from a website can be modified, when you copy text, `e.preventDefault();` is called to prevent copying it, and `e.clipboardData.setData();` is used to modify the contents of the clipboard. 
```js
element.addEventListener("copy", (e) => {
  e.clipboardData.setData('text/plain', "Foo Bar"); // Use the event to copy something into the users clipboard
  e.preventDefault(); // Cancel the actual event.
})
```
This is why you should always be careful when you copy text from website and paste it into your Terminal. But this can be used in a fun way as well.
