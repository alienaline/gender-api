const result = document.querySelector('.result');

function request(url) {
    return fetch(url).then(response => response.json());
}

document.querySelector('.button').addEventListener('click', () => {
    const name = document.querySelector('.input').value.trim();
    const serverUrl1 = 'https://api.genderize.io';
    const serverUrl2 = 'https://api.nationalize.io';
    const urlGenderize = `${serverUrl1}?name=${name}`;
    const urlNationalize = `${serverUrl2}?name=${name}`;

    name === '' ? result.innerHTML = 'enter name first' : 
    Promise.all([
        request(urlGenderize),
        request(urlNationalize)
    ])
    .then(data => {
        let person = data[0]; 
        let countryData = data[1].country[0];
        
        if (data[0].gender !== null) {
            result.innerHTML = person.name + ' is ' + person.gender + ' from ' + countryData.country_id
        } else { 
            result.innerHTML = 'enter name on eng'
        }
    })
})
