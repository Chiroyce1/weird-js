const table = document.createElement('table');

document.body.appendChild(table);

const addRow = (key, value) => {
    const row = document.createElement('tr');
    const keyCell = document.createElement('td');
    const valueCell = document.createElement('td');
    keyCell.innerText = key;
    valueCell.innerText = value;
    keyCell.classList.add("key");
    valueCell.id = value;
    row.appendChild(keyCell);
    row.appendChild(valueCell);
    table.appendChild(row);
}

let canvas = document.createElement("canvas");
let webgl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
let debugInfo = webgl.getExtension("RENDERER") || webgl.getExtension("webgl_debug_renderer_info");

if (debugInfo) {
    addRow("GPU", webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
}

for (const property in navigator) {
    if (
        navigator[property].toString().includes('[native code]') || 
        navigator[property].toString().includes('[object')
    ) {
        continue;
    }

    let key = property;
    let value = navigator[property];

    switch (key) {
        case 'hardwareConcurrency':
            value += ' (number of physical CPU cores)';
            break;
        case 'maxTouchPoints':
            value += " (number of touch points on your device's screen)";
            break;
    }

    addRow(key, value);
}

addRow('Browser window size', `${window.innerWidth}x${window.innerHeight}`);
addRow('Computer Screen size', `${screen.width}x${screen.height}`);
