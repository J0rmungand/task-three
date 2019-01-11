const endpoint = 'https://jsonplaceholder.typicode.com/users';

const users = [];

var ifFind = '';
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => users.push(...data));

function findMatches(keyword, users) {
  return users.filter(place => {
    const regex = new RegExp(keyword, 'igy');
    
    return place.name.match(regex)
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, users)
  const html = matchArray.map(place => {
    
    const regex = new RegExp(this.value, 'igy');
    ifFind = place.name.match(regex);
    const name = place.name.replace(regex, `<span class="highlight">${this.value}</span>`);
    
    return `
      <li>
        <span class="name">${name}</span>
      </li>
    `;
  }).join('');
  
  suggestions.innerHTML = html;

clickLi();
}


const searchInput = document.querySelector('.search-input');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('focus', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


function trim(str) {
        return str.replace(/^\s+|\s+$/g,"");
}

function clickLi(){
  var currentAll = document.querySelectorAll('.suggestions li'); 
for (i = 0; i < currentAll.length; ++i) {
      currentAll[i].onclick = function() {
       var str=this.textContent;
    
     document.querySelector('.search-input').value=trim(str);
       
    }
};
}


window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 0){
      //searchInput.value=""; - не вышло сделать Проверку совпадения
  }
  searchInput.blur();
}

window.onresize = function(event) {
  //searchInput.value=""; - не вышло сделать Проверку совпадения
  searchInput.blur();
  //if (window.ifFind==null){
    console.log(window.ifFind[0]);
  //}
};
document.querySelector('body').addEventListener('click', function() {
  //searchInput.blur();
});