import {books} from '../data/book.js';

const id = new URLSearchParams(window.location.search).get('id');
const thisBook = books.filter(value => {
  return value.ID == id
})[0];
const targetDir = "../images/titles/" + thisBook.title + "/pages";

let titlesHTML = '';
titlesHTML += `
<div>
  <h2>${thisBook.title}</h2>
</div>
<div class = "container">
`;

for(let i = 1; i <= thisBook.pages; i++) {
  titlesHTML +=`
	<img src="../images/titles/${thisBook.title}/pages/${i}.${thisBook.format}" class="book-image">

	`;
};

titlesHTML +=`
</div>
<div class="books-artist">
    ${thisBook.artist}
</div>

<div class="books-spacer"></div>
`;

document.querySelector('.js-books-grid').innerHTML = titlesHTML;