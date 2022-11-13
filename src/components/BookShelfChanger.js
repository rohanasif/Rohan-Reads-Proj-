import React from "react";

const BookShelfChanger = ({ book, updateBookShelf }) => {
	return (
		<div className="book-shelf-changer">
			<select
				defaultValue={book.shelf ? book.shelf : "none"}
				onChange={(e) => updateBookShelf(book, e.target.value)}
			>
				<option value="move" disabled>
					Move to...
				</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
};

export default BookShelfChanger;
