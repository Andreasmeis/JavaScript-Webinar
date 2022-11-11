var employees = [{
    "first_name": "Conrad",
    "last_name": "Chatfield",
    "email": "cchatfield0@51.la",
    "skills": "HTRI Software",
    "country": "Philippines",
    "sallary": "2041.01",
    "photo": "http://dummyimage.com/400x400.jpg/cc0000/ffffff"
}, {
    "first_name": "Daron",
    "last_name": "Cohn",
    "email": "dcohn1@xing.com",
    "skills": "Keyboard Skills",
    "country": "Croatia",
    "sallary": "1962.92",
    "photo": "http://dummyimage.com/400x400.jpg/dddddd/000000"
}, {
    "first_name": "Darci",
    "last_name": "Hopewell",
    "email": "dhopewell2@surveymonkey.com",
    "skills": "BPWin",
    "country": "Russia",
    "sallary": "1613.56",
    "photo": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff"
}, {
    "first_name": "Hildy",
    "last_name": "Auchterlonie",
    "email": "hauchterlonie3@ezinearticles.com",
    "skills": "Oracle VM",
    "country": "Mexico",
    "sallary": "1923.32",
    "photo": "http://dummyimage.com/400x400.jpg/cc0000/ffffff"
}, {
    "first_name": "Jethro",
    "last_name": "Curzey",
    "email": "jcurzey4@slate.com",
    "skills": "AAT",
    "country": "Russia",
    "sallary": "1382.71",
    "photo": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff"
}, {
    "first_name": "Lorry",
    "last_name": "Grimston",
    "email": "lgrimston5@dell.com",
    "skills": "Time Series Analysis",
    "country": "China",
    "sallary": "1756.42",
    "photo": "http://dummyimage.com/400x400.jpg/dddddd/000000"
}, {
    "first_name": "Fan",
    "last_name": "Kindleside",
    "email": "fkindleside6@lycos.com",
    "skills": "HD Camera Operation",
    "country": "Indonesia",
    "sallary": "1017.55",
    "photo": "http://dummyimage.com/400x400.jpg/dddddd/000000"
}, {
    "first_name": "Guntar",
    "last_name": "Gulberg",
    "email": "ggulberg7@amazon.com",
    "skills": "OATS",
    "country": "China",
    "sallary": "1064.63",
    "photo": "http://dummyimage.com/400x400.jpg/cc0000/ffffff"
}, {
    "first_name": "Germana",
    "last_name": "Langland",
    "email": "glangland8@tamu.edu",
    "skills": "vBlock",
    "country": "United States",
    "sallary": "823.47",
    "photo": "http://dummyimage.com/400x400.jpg/ff4444/ffffff"
}, {
    "first_name": "Laure",
    "last_name": "Kynder",
    "email": "lkynder9@wisc.edu",
    "skills": "xPression",
    "country": "France",
    "sallary": "1778.86",
    "photo": "http://dummyimage.com/400x400.jpg/ff4444/ffffff"
}, {
    "first_name": "Meg",
    "last_name": "Kemmish",
    "email": "mkemmisha@chronoengine.com",
    "skills": "DMRB",
    "country": "France",
    "sallary": "2281.82",
    "photo": "http://dummyimage.com/400x400.jpg/cc0000/ffffff"
}, {
    "first_name": "Demetre",
    "last_name": "McKag",
    "email": "dmckagb@slideshare.net",
    "skills": "TNS",
    "country": "Brazil",
    "sallary": "1152.84",
    "photo": "http://dummyimage.com/400x400.jpg/dddddd/000000"
}, {
    "first_name": "Auberon",
    "last_name": "Caw",
    "email": "acawc@instagram.com",
    "skills": "MSP Practitioner",
    "country": "Poland",
    "sallary": "1653.09",
    "photo": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff"
}, {
    "first_name": "Reidar",
    "last_name": "Abriani",
    "email": "rabrianid@homestead.com",
    "skills": "Flex",
    "country": "Guatemala",
    "sallary": "1392.80",
    "photo": "http://dummyimage.com/400x400.jpg/dddddd/000000"
}, {
    "first_name": "Ewen",
    "last_name": "Impey",
    "email": "eimpeye@ihg.com",
    "skills": "Knee Pain",
    "country": "China",
    "sallary": "1320.44",
    "photo": "http://dummyimage.com/400x400.jpg/cc0000/ffffff"
}];

search("");

document.getElementById("search-btn").addEventListener("click", function(){
    let value = document.getElementById('search-input').value;
    search(value);
});



function search(value){
    value = value.toLowerCase();
    let search = employees.filter(function (e){
        return e.first_name.toLowerCase().includes(value) ||
            e.last_name.toLowerCase().includes(value) ||
            e.email.toLowerCase().includes(value) ||
            e.country.toLowerCase().includes(value);
    });

    let cards = "";
    let total_salary = 0;
    if (search.length > 0) {
        for (let i = 0; i < search.length; i++) {
            cards += `
            <div class="col m-4">
                <div class="card" style="width: 18rem;">
                    <img src="${search[i].photo}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${search[i].first_name} ${search[i].last_name}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">email: ${search[i].email}</li>
                            <li class="list-group-item">Skills: ${search[i].skills}</li>
                            <li class="list-group-item">Country: ${search[i].country}</li>
                            <li class="list-group-item">Salary: ${search[i].sallary}€</li>
                        </ul>
                </div>
            </div>
        `;
            total_salary += parseFloat(search[i].sallary);
        }
        ;
    }else {
        cards = "";
    }

    document.querySelector('#card').innerHTML = cards;
    document.querySelector('#total-salary').innerHTML =`Total Salary: ${total_salary}`;
    if (total_salary >= 5000.00){
        document.querySelector('#total-salary').style.color = "red";
    }else {
        document.querySelector('#total-salary').style.color = "black";
    }
}


































