import {books} from '../data/book.js';

let booksHTML = '';

books.forEach((book) => {
  booksHTML += `
	<div class="book-container">
		<a href = "../titles.html?id=${book.ID}">
			<div class="book-image-container">
					<img class="book-image"
					src="../images/titles/${book.title}/cover.jpg">
			</div>

			<div class="book-name limit-text-to-2-lines">
					${book.title}
			</div>
		</a>
		<div class="books-artist">
				${book.artist}
		</div>

		<div class="books-spacer"></div>
	</div>
	`;
});

document.querySelector('.js-books-grid').innerHTML = booksHTML;