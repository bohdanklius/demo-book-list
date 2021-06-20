import React, { useEffect, useState } from 'react';
import { getBooksAPI } from './api';
import './App.css';
import { BookForm } from './components/BookForm';
import { BooksList } from './components/BooksList';
import { Header } from './components/Header';

const DASHBOARD = 'DASHBOARD';
const BOOKFORM = 'BOOKFORM';

function App() {
  const [books, setBooks] = useState([]);
  const [navigationActive, setNavigationActive] = useState(DASHBOARD);
  const [editedBook, setEditedBook] = useState({
    id: Date.now(),
    bookTitle: '',
    authorName: '',
    category: '',
    ISBN: '',
  });

  useEffect(() => {
    getBooksAPI()
      .then((response) => setBooks(response));
  }, []);

  const handleEdit = (bookId) => {
    setNavigationActive(BOOKFORM);
    setEditedBook(books.find(({ id }) => id === bookId));
  };

  const handleRemove = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      <Header setNavigationActive={setNavigationActive} setEditedBook={setEditedBook} />
      {navigationActive === DASHBOARD && (
        <BooksList
          handleRemove={handleRemove}
          handleEdit={handleEdit}
          books={books}
        />
      )}

      {navigationActive === BOOKFORM && (
        <BookForm
          setNavigationActive={setNavigationActive}
          setBooks={setBooks}
          editedBook={editedBook}
        />
      )}
    </div>
  );
}

export default App;
