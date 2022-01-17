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

    
    firstName === '' ? result.innerHTML = 'enter name first' : 
    request(urlGenderize).then(data => data.gender !== null ? 
    result.innerHTML = data.name + ' is ' + data.gender : 
    result.innerHTML = 'enter name on eng');
    
    request(urlNationalize)
    .then(data => result.innerHTML += ' from ' + data.country[0].country_id);
})
