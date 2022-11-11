'use strict'
let api_key = 'B_-6mQhPEhuEjYX-azcisTkk1n4FQtJhS1ry7-DWrCs';

var data2


let search = async (query, per_page, page) => {

    console.log(query);
    let data = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${per_page}`, {
        method: 'GET',
        headers : {
            Authorization: `Client-ID ${api_key}`
        }
    });
    data = await data.json();
    console.log(data);
    generateCards(data.results);
}

document.querySelector('#search-button').addEventListener("click", (e) => {
    console.log("click");
    let val = document.querySelector('#search-input').value;
    search(val, 3, 1);
})

document.querySelector('#search-input').addEventListener("keyup", (e)=> {
    if (e.key == "Enter") {
        console.log("enter");
        let val = document.querySelector('#search-input').value;
        // console.log(val);
        search(val, 3, 1);
    }
})

let generateCards = (data) => {

    let html = '';
    data.forEach( (d) => {
        html += `<div class="card column is-one-third-desktop is-full-mobile is-half-tablet" xmlns="http://www.w3.org/1999/html">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img  style="object-fit: cover" src="${d.urls.regular}" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="${d.user.profile_image.small}" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">${d.user.first_name} ${d.user.last_name ? d.user.last_name : ''}</p>
                        <a href="https://www.instagram.com/${d.user.instagram_username}" <p class="subtitle is-6">${d.user.instagram_username ? '@' + d.user.instagram_username : ''}</p></a>
                    </div>
                </div>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>`
    });
    document.querySelector('#data').innerHTML = html;

}




