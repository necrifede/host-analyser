const $input = document.querySelector('#darkmode-toggle');
const $html = document.querySelector('html');

const isDark2 = $html.getAttribute('data-theme');
$html.setAttribute('data-theme', isDark2 === 'light' ? 'dark' : 'light')

$input.addEventListener('click', (event) => {
    const isDark = event.target.checked;
    $html.setAttribute('data-theme', isDark ? 'dark' : 'light');
});
