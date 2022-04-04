const input = document.querySelector('.input');
const button = document.querySelector('.button');
const result = document.querySelector('.result');

async function request(url) {
    const response = await fetch(url);
    return await response.json();
}

button.addEventListener('click', (event) => {
    event.preventDefault();

    const name = input.value.trim();
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
