import React from "react";

const ShelfChanger = ({ shelf, book, updateBookShelf }) => {
	// const [optionValue, setOptionValue] = useState(shelf);

	// const updateShelf = () => {
	// 	BooksAPI.update(book, optionValue);
	// };
	// updateShelf();

	return (
		<div className="book-shelf-changer">
			<select
				defaultValue={shelf ? shelf : "none"}
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

export default ShelfChanger;
