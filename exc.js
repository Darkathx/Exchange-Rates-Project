class Exchange {
    constructor(from, to) {
        this.xhr = new XMLHttpRequest();
        this.from = from;
        this.to = to;
    }
    updateCurrencies(from, to) {
        this.from = from;
        this.to = to;
    }
    exchange(callback) {
        this.xhr.open("GET", `https://api.exchangerate.host/base=${this.from}`);
        this.xhr.responseType = "json";
        this.xhr.onload = () => {   
            if(this.xhr.status === 200) {
                callback(null, this.xhr.response.rates[this.to]);
            }
            else {
                callback("ERROR", null);
            }
        };

        this.xhr.send();
    }
}