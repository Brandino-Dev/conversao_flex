console.log('Script carregado')

function decimalToBinary(decimal) {
    let binario = '';
    while (decimal > 0 ) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }
    if (binario === '') {
        return '0';
    }
    return binario;
}

function binaryToDecimal(binario) {
    let decimal = 0;
    for (let i = 0; i < binario.length; i++) {
        const bit = parseInt(binario.charAt(binario.length - 1 - i));
        decimal += bit * Math.pow(2, i);
    }
    return decimal;
}

function handleDecimalToBinary() {
    const decimalInput = document.getElementById("decimal").value;
    const resultado = decimalToBinary(decimalInput);
    document.getElementById('binary').value = resultado;
}

function handleBinaryToDecimal() {
    const binaryInput = document.getElementById('binary').value;
    const resultado = binaryToDecimal(binaryInput);
    document.getElementById('decimal').value = resultado;
}

document.getElementById('btnDecimalToBinary').addEventListener("click", handleDecimalToBinary);

document.getElementById('btnBinaryToDecimal').addEventListener("click", handleBinaryToDecimal);

