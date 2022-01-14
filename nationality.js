/* const result = document.querySelector('.result');

document.querySelector('.button').addEventListener('click', () => {
    const firstName = document.querySelector('.input').value.trim();
    const serverUrl1 = 'https://api.genderize.io';
    const serverUrl2 = 'https://api.nationalize.io';
    const urlGenderize = `${serverUrl1}?name=${firstName}`;
    const urlNationalize = `${serverUrl2}?name=${firstName}`;

    
    firstName === '' ? result.innerHTML = 'enter name first' : 
    fetch(urlGenderize).then(response => response.json())
        .then(data => data.gender !== null ? 
        result.innerHTML = data.name + ' is ' + data.gender : 
        result.innerHTML = 'enter name on eng')
        .then(urlNationalize => fetch(urlNationalize))
        .then(response => response.json())
        .then(data => result.innerHTML += ' from ' + data.country[0].country_id);
})
*/