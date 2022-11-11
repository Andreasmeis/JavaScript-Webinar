'use strict'
let card = `
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>`;

let pairs = [
    {
        "id":"1",
        "symbol":"BTC",
        "image":"images/btc.png"
    },
    {
        "id":"2",
        "symbol":"ETH",
        "image":"images/eth.png"
    }
];

let html = '';
pairs.forEach( p =>{
    html += `<div class="card column is-one-third-desktop is-full-mobile is-half-tablet" xmlns="http://www.w3.org/1999/html">
<!--                <div class="card-image">-->
<!--                    <figure class="image is-4by3">-->
<!--                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">-->
<!--                    </figure>-->
<!--                  </div>-->
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img src="${p.image}" alt="Placeholder image">
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">${p.symbol}</p>
                        <p class="subtitle is-6" id=""></p>
                      </div>
                    </div>
                
                    <div class="title is-4" id="${p.symbol}">
                    </div>
                  </div>
            </div>`
})

document.querySelector('#cards').innerHTML += html;


let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade/btceur@trade');
var price;
let pair;
let ethlast = null;
let btclast = null;
ws.onmessage = (event) => {
    price = parseFloat(JSON.parse(event.data).p).toFixed(2);
    pair = JSON.parse(event.data).s;
    console.log(JSON.parse(event.data));
    console.log(pair);
    if (pair == 'ETHEUR') {
        document.querySelector('#ETH').innerHTML = `${price}`;
        document.querySelector('#ETH').style.color = !ethlast || ethlast == price ? 'black': ethlast < price ?'green': 'red'  ;
        ethlast = price;
    }else if (pair == 'BTCEUR') {
        document.querySelector('#BTC').innerHTML = `${price}`;
        document.querySelector('#BTC').style.color = !btclast || btclast == price ? 'black': btclast < price ?'green': 'red'  ;
        btclast = price;

    }
}
