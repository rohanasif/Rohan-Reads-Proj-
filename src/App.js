import "./App.css";
import { Routes, Route } from "react-router-dom";
import Shelves from "./components/Shelves";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
	const [books, setBooks] = useState([]);
	const [searchBooksArr, setSearchBooksArr] = useState([]);
	const [query, setQuery] = useState("");
	const [combinedBooks, setCombinedBooks] = useState([]);
	const [mapBooks, setMapBooks] = useState({});

	useEffect(() => {
		let active = true;
		if (query) {
			BooksAPI.search(query).then((data) => {
				if (data.error) {
					setSearchBooksArr([]);
				} else {
					if (active) {
						setSearchBooksArr(data);
					}
				}
			});
		}

		return () => {
			active = false;
			setSearchBooksArr([]);
		};
	}, [query]);

	useEffect(() => {
		const getData = async () => {
			setBooks(await BooksAPI.getAll());
			setMapBooks(createMapOfBooks(await BooksAPI.getAll()));
		};
		getData();
	}, []);

	useEffect(() => {
		const merged = searchBooksArr.map((book) => {
			if (mapBooks.has(book.id)) {
				return mapBooks.get(book.id);
			} else {
				return book;
			}
		});
		setCombinedBooks(merged);
	}, [searchBooksArr]);

	const createMapOfBooks = (books) => {
		const maping = new Map();
		books.map((book) => maping.set(book.id, book));
		return maping;
	};

	const updateBookShelf = (book, shelfDir) => {
		const updatedBooksShelf = books.map((b) => {
			if (b.id === book.id) {
				book.shelf = shelfDir;
				return book;
			}
			return b;
		});
		if (!mapBooks.has(book.id)) {
			book.shelf = shelfDir;
			updatedBooksShelf.push(book)
		  }
		setBooks(updatedBooksShelf);
		BooksAPI.update(book, shelfDir);
	};

	return (
		<div className="app">
			<Routes>
				<Route
					exact
					path="/"
					element={<Shelves books={books} updateBookShelf={updateBookShelf} />}
				/>
				<Route
					path="/search"
					element={
						<Search
							updateBookShelf={updateBookShelf}
							query={query}
							searchBooksArr={searchBooksArr}
							setQuery={setQuery}
							combinedBooks={combinedBooks}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
