import React from "react";
import Shelf from "./Shelf";
import Header from "./Header";
import { Link } from "react-router-dom";

const Shelves = ({ books, updateBookShelf }) => {
	return (
		<div className="list-books">
			<Header />
			<div className="list-books-content">
				<div>
					<Shelf
						shelfName={"Currently Reading"}
						books={books.filter((book) => book.shelf === "currentlyReading")}
						updateBookShelf={updateBookShelf}
					/>
					<Shelf
						shelfName={"Want to Read"}
						books={books.filter((book) => book.shelf === "wantToRead")}
						updateBookShelf={updateBookShelf}
					/>
					<Shelf
						shelfName={"Read"}
						books={books.filter((book) => book.shelf === "read")}
						updateBookShelf={updateBookShelf}
					/>
				</div>
			</div>
			<div className="open-search">
				<Link to="/search">Add a book</Link>
			</div>
		</div>
	);
};

export default Shelves;
