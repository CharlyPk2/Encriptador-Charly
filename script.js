document.getElementById('encryptButton').addEventListener('click', function() {
    let texto = document.getElementById('inputText').value;
    let textoencriptado = encrypt(texto);
    updateOutput(textoencriptado);
});

document.getElementById('decryptButton').addEventListener('click', function() {
    let texto = document.getElementById('inputText').value;
    let texto_desincriptado = decrypt(texto);
    updateOutput(texto_desincriptado);
});

function encrypt(texto) {
    return texto.split(' ').map(encryptWord).join(' ');
}

function decrypt(texto) {
    return texto.split(' ').map(decryptWord).join(' ');
}

function encryptWord(word) {
    let textoencriptado = '';
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (i === 0) {
            textoencriptado += shiftChar(char, 4);
        } else if (i === 1) {
            textoencriptado += shiftChar(char, -3);
        } else {
            textoencriptado += shiftChar(char, 7);
        }
    }
    return textoencriptado;
}

function decryptWord(word) {
    let texto_desincriptado = '';
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (i === 0) {
            texto_desincriptado += shiftChar(char, -4);
        } else if (i === 1) {
            texto_desincriptado += shiftChar(char, 3);
        } else {
            texto_desincriptado += shiftChar(char, -7);
        }
    }
    return texto_desincriptado;
}

function shiftChar(char, shift) {
    const desiende = 'abcdefghijklmnopqrstuvwxyz';
    const aumenta = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let abecedario, posision;

    if (desiende.includes(char)) {
        abecedario = desiende;
        posision = abecedario.indexOf(char);
    } else if (aumenta.includes(char)) {
        abecedario = aumenta;
        posision = abecedario.indexOf(char);
    } else {
        return char; // Si no es una letra, no cambia
    }

    let nueva_posision = (posision + shift + abecedario.length) % abecedario.length;
    return abecedario[nueva_posision];
}

function updateOutput(text) {
    document.querySelector('.output-section h2').textContent = text;
    document.querySelector('.output-section p').textContent = '';
}
