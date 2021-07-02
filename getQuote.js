var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.tronalddump.io/random/quote");
xhr.send();
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        var res = JSON.parse(xhr.responseText);
        var appearedAt = res.appeared_at.substring(0, 10);
        var value = res.value;
        document.getElementById("quoteEnd").innerText = `- Donald Trump, ${appearedAt}`;
        document.getElementById("quote").innerText = `"${value}"`;
    };
};