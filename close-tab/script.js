linkElement = document.createElement("a");
linkElement.innerText = "Click me, I will open in another tab, wait 2 seconds and see the magic."
linkElement.setAttribute("href", "https://wikipedia.org")
document.body.appendChild(linkElement)

linkElement.addEventListener("click", (e) => {
    e.preventDefault();
    tab = window.open("https://wikipedia.org")
    setTimeout(() => {
        tab.close();
    }, 2000);
    document.write(`Boom! I just closed the tab<br>More info <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/close">here</a>`)
})