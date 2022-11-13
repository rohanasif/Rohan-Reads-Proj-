import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const Search = ({ updateBookShelf, query, combinedBooks, setQuery }) => {
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to="/">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<input
						type="text"
						placeholder="Search by title, author, or ISBN"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{combinedBooks.map((book) => (
						<li key={book.id}>
							<Book book={book} updateBookShelf={updateBookShelf} />
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default Search;
