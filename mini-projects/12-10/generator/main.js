const minInput = document.querySelector("#min");
const maxInput = document.querySelector("#max");
const amountInput = document.querySelector("#amount");
const checkboxContainer = document.querySelector("#checkboxContainer");
const uniqueCheckbox = document.querySelector("#unique");

const generateButton = document.querySelector("#generateBtn");

const resultsField = document.querySelector("#results");

let isUnique = false;

minInput.addEventListener("input", () => {
    const min = +minInput.value;
    const max = +maxInput.value;
    minInput.value = min < max ? min : max - 1;
})

maxInput.addEventListener("input", () => {
    const min = +minInput.value;
    const max = +maxInput.value;
    maxInput.value = min < max ? max : min + 1;
})

amountInput.addEventListener('input', () => {
    if (amountInput.value > 1) {
        checkboxContainer.classList.remove("hidden");
    } else {
        amountInput.value = 1;
        checkboxContainer.classList.add("hidden");
    }
})

uniqueCheckbox.addEventListener("change", () => {
    isUnique = uniqueCheckbox.checked;
})

generateButton.addEventListener('click', () => {
    const min = +minInput.value;
    const max = +maxInput.value;
    amountInput.value = (isUnique && amountInput.value > (max - min + 1)) ? (max - min + 1) : amountInput.value;
    const amount = +amountInput.value;
    resultsField.innerHTML = generateRandomSequence(min, max, amount).toString();
})

function generateRandomSequence(min, max, amount) {
    let results = [];
    for (let i = 0; i < amount; i++) {
        let randomNumber = generateRandomNumber(min, max);
        console.log(randomNumber);
        if (isUnique) {
            while (results.includes(randomNumber)) {
                randomNumber = generateRandomNumber(min, max);
            }
        }
        results.push(randomNumber);
    }
    return results;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}