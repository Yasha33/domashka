const axios = require('axios');

axios.get('https://swapi.co/api/people/1/')
    .then(response => {
        let li = [];
        for (var key in response.data) {
            li.push(`<li>${key} : ${response.data[key]}</li>`);
        }
        document.querySelector('#description').innerHTML = li.splice(0, 6).join(' ');
    }
    );