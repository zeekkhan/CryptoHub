// fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//     headers: {
//         'X-CMC_PRO_API_KEY': 'a6ef4b27-8f9b-4772-8ccc-1b085abf0f07'
//     }
// })
// .then(response => response.json())
// .then(data => {
//     // data is the API response
//     // you can use it to update the price on your website
//     // for example, to display the price of Bitcoin:
//     const btc = data.data.find(coin => coin.symbol === 'BTC');
//     if (btc) {
//         document.getElementById('btc-price').textContent = btc.quote.USD.price;
//     }
// })
// .catch(error => console.error('Error:', error));



// var textWrapper = document.querySelector('#home');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// var letters = document.querySelectorAll('#home .letter');
// letters.forEach((letter, index) => {
//     letter.style.animationDelay = `${index * 0.05}s`;
// });



var textWrapper = document.querySelector('#home');
textWrapper.innerHTML = textWrapper.textContent.replace(/(\S)/g, "<span class='letter'>$&</span>");

var letters = document.querySelectorAll('#home .letter');
letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.05}s`;
});


var textWrapper = document.querySelector('#para1');
textWrapper.innerHTML = textWrapper.textContent.replace(/(\S)/g, "<span class='letter'>$&</span>");

// var letters = document.querySelectorAll('#para1 .letter');
// letters.forEach((letter, index) => {
//     letter.style.animation = "showup 1.5s linear forwards 2s";
//     letter.style.animationDelay = `${index * 0.05 + 2}s`;
// });

