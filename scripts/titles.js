import {books} from '../data/book.js';

let id = new URLSearchParams(window.location.search).get('id');
const thisBook = books.filter(value => {
    return value.ID == id
})[0];

let titlesHTML = '';
titlesHTML += `
<img src="../images/titles/${thisBook.title}/cover.jpg" class="book-image">
<div>
    <h2>${thisBook.title}</h2>
    <div class="rating">
        <img src="../images/icons/star-icon.svg">
        <h4>${thisBook.rate}</h4>
    </div>
</div>


<div class="books-artist">
        ${thisBook.artist}
</div>

<div class="title reading">
	<a href="../chapters.html?id=${thisBook.ID}&chapter">Read</a>
</div>

<div class="books-spacer"></div>
`;

document.querySelector('.js-books-grid').innerHTML = titlesHTML;