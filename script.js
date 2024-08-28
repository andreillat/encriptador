document.getElementById('encryptBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    if (textInput === "") {
        alert("Debe ingresar un texto para encriptar o desencriptar.");
        return;
    }
    const encryptedText = encrypt(textInput);
    document.getElementById('result').innerText = `Texto encriptado: ${encryptedText}`;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    if (textInput === "") {
        alert("Debe ingresar un texto para encriptar o desencriptar.");
        return;
    }
    const decryptedText = decrypt(textInput);
    document.getElementById('result').innerText = `Texto desencriptado: ${decryptedText}`;
});

function encrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        encryptedText += String.fromCharCode(text.charCodeAt(i) + 3);
    }
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        decryptedText += String.fromCharCode(text.charCodeAt(i) - 3);
    }
    return decryptedText;
}
