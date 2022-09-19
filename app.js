const firstSelect = document.getElementById("from");
const secondSelect = document.getElementById("to");
const exchangeTitle = document.querySelector(".change");
const getWritten = document.getElementById("converted");
const amount = document.getElementById("amount");

const ui = new UI();
const exc = new Exchange(firstSelect.value, secondSelect.value);



eventListeners();

function eventListeners() {
    firstSelect.addEventListener("change", () => {
        ui.updateTitle();
    });
    secondSelect.addEventListener("change", () => {
        ui.updateTitle();
    });
    amount.addEventListener("input", calculator);
}

function calculator(e) {
    exc.updateCurrencies(firstSelect.value, secondSelect.value);
    exc.exchange((err, response) => {
        if(err) {
            console.error(err);
        }
        else {
            ui.displayResult(response * Number(amount.value));
        }
    });

    e.preventDefault();
}