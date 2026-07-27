document.getElementById('convert-btn').addEventListener('click', function() {
    const inputVal = document.getElementById('degrees').value;
    const type = document.getElementById('type').value;
    const resultBox = document.getElementById('result-text');

    if (inputVal === '') {
        resultBox.innerHTML = "<span style='color: #e53e3e;'>Please enter a valid number!</span>";
        return;
    }

    const degrees = parseFloat(inputVal);
    let c, f, k;

    if (type === 'celsius') {
        c = degrees;
        f = (degrees * 9/5) + 32;
        k = degrees + 273.15;
    } else if (type === 'fahrenheit') {
        c = (degrees - 32) * 5/9;
        f = degrees;
        k = c + 273.15;
    } else if (type === 'kelvin') {
        c = degrees - 273.15;
        f = (c * 9/5) + 32;
        k = degrees;
    }

    resultBox.innerHTML = `
        <strong>Celsius (°C):</strong> ${c.toFixed(2)}<br>
        <strong>Fahrenheit (°F):</strong> ${f.toFixed(2)}<br>
        <strong>Kelvin (K):</strong> ${k.toFixed(2)}
    `;
});