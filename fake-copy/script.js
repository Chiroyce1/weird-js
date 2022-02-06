copy = document.createElement('p')
copy.innerText = 'Copy me!'
document.body.appendChild(copy)

input = document.createElement('input')
input.placeholder = 'Paste it here and see!'
document.body.appendChild(input)

document.body.appendChild(document.createElement('br'))
document.body.appendChild(document.createElement('br'))

info = document.createElement('a')
info.href = 'https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData'
info.innerText = 'More info here.'
document.body.appendChild(info)

copy.addEventListener('copy', (e) => {
    console.log("Running!")
    e.clipboardData.setData('text/plain', "You didn't copy this right? 😱"); 
    e.preventDefault(); 
});