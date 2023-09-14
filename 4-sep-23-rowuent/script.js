document.addEventListener("DOMContentLoaded", function () {
    const sideLengthInput = document.getElementById("sideLength");
    const calculationTypeSelect = document.getElementById("calculationType");
    const calculateButton = document.getElementById("calculate");
    const resultDisplay = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const sideLength = parseFloat(sideLengthInput.value);
        const calculationType = calculationTypeSelect.value;

        if (!isNaN(sideLength) && sideLength > 0) {
            let resultText = "";
            let formulaText = "";

            if (calculationType === "luas") {
                const area = sideLength * sideLength;
                resultText = `Luas Persegi: ${area}`;
                formulaText = "Formula for Luas Persegi: s x s";
            } else if (calculationType === "keliling") {
                const perimeter = 4 * sideLength;
                resultText = `Keliling Persegi: ${perimeter}`;
                formulaText = "Formula for Keliling Persegi: 4s";
            }

            resultDisplay.innerHTML = `
                <p>${resultText}</p>
                <p>${formulaText}</p>
            `;
        } else {
            resultDisplay.innerHTML = "Masukkan panjang sisi yang valid.";
        }
    });

    // Initialize the result section with default text
    resultDisplay.innerHTML = `
        <p>Hasil perhitungan akan ditampilkan di sini.</p>
        <p>Formula perhitungan akan ditampilkan di sini.</p>
    `;
});
