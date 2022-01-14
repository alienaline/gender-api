const result = document.querySelector('.result');

function request(url) {
    return fetch(url).then(response => response.json());
}

document.querySelector('.button').addEventListener('click', () => {
    const firstName = document.querySelector('.input').value.trim();
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    
    firstName === '' ? result.innerHTML = 'enter name first' : 
    request(url).then(data => data.gender !== null ? result.innerHTML = data.name + ' is ' + data.gender : result.innerHTML = 'enter name on eng');
})