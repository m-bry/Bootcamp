$("btn").on("click", () => {
    const url ="https://api.coindesk.com/v1/bpi/currentprice.json";
    fetch(url)
    .then((response) => { 
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json();
    })
    .then((data) => { 
        var country = $('input[name="country"]:checked').val();
        var rate = data.bpi[country].rate_float.toFixed(2);
        var symbol = data.bpi[country].symbol;
        $("#displayPrice").html(symbol + rate);
    })
    .catch((error) => { 

    })
})