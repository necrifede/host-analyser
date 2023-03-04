// const { URL, API_KEY, API_HOST } = require('config');
import { URL, API_KEY, API_HOST } from '../config.js';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
    },
};

const fetchInfo = (ip) =>
    fetch(`${URL}/?ip=${ip}`, options)
        .then((res) => res.json())
        .catch((error) => console.error(error));

const selector = (selector) => document.querySelector(selector);

const $form = selector('#form');
const $input = selector('#input');
const $submit = selector('#submit');
const $results = selector('#results');

$form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { value: ip } = $input;

    if (!ip) return;

    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', 'true');

    const ipInfo = await fetchInfo(ip);

    $submit.removeAttribute('disabled');
    $submit.removeAttribute('aria-busy');

    if (!ipInfo) return;

    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
});
