const endpoint = 'https://jsonplaceholder.typicode.com/users';

const users = [];

// fetch grabs endpoint - at this point a promise and generates readablestream
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => users.push(...data));

function findMatches(keyword, users) {
  return users.filter(place => {
    // does city or state match? use paramater regex
    const regex = new RegExp(keyword, 'ig');
    return place.name.match(regex)
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, users)
  const html = matchArray.map(place => {
    
    const regex = new RegExp(this.value, 'ig');
    const name = place.name.replace(regex, `<span class="highlight">${this.value}</span>`);
    
    return `
      <li>
        <span class="name">${name}</span>
      </li>
    `;
  }).join('');
  
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search-input');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('focus', displayMatches);
searchInput.addEventListener('keyup', displayMatches);