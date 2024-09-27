function appendToCalc(value) {
    const input = document.getElementById('calcInput');
    if (input.value === '0' || input.value === 'Error') {
        input.value = value;
    } else {
        input.value += value;
    }
}

function clearCalc() {
    document.getElementById('calcInput').value = '0';
}

function calculate() {
    const input = document.getElementById('calcInput');
    try {
        input.value = eval(input.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch {
        input.value = 'Error';
    }
}

function calculateAge() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('ageResult').innerText = `You are ${age} years old.`;
}

function convertKmToMiles() {
    const km = parseFloat(document.getElementById('kmInput').value);
    if (isNaN(km)) {
        document.getElementById('conversionResult').innerText = "Please enter a valid number.";
        return;
    }
    const miles = km * 0.621371;
    document.getElementById('conversionResult').innerText = `${km} kilometers is equal to ${miles.toFixed(2)} miles.`;
}
