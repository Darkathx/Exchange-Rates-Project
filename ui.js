class UI {
    constructor() {
        this.firstSelect = document.getElementById("from");
        this.secondSelect = document.getElementById("to");
        this.exchangeTitle = document.querySelector(".change");
        this.getWritten = document.getElementById("converted");
        this.amount = document.getElementById("amount");
    }
   
    updateTitle(e) {
        exchangeTitle.textContent = `${firstSelect.options[firstSelect.selectedIndex].textContent}-${secondSelect.options[secondSelect.selectedIndex].textContent}`;
        //console.log(firstSelect.options[firstSelect.selectedIndex].textContent);
    }
    displayResult(result) {
        getWritten.value = result;
    }
}