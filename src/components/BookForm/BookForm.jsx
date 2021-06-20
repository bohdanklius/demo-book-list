import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './BookForm.scss';
import {
  Button,
  Form,
  Input,
  Select,
} from 'semantic-ui-react';
import { setBooksAPI, editBookAPI } from '../../api';

const options = [
  { key: 0, text: 'Category', value: 'Category' },
  { key: 1, text: 'Художня література', value: 'Художня література' },
  { key: 2, text: 'Історія', value: 'Історія' },
  { key: 3, text: 'Туризм', value: 'Туризм' },
];

export const BookForm = ({ setBooks, editedBook, setNavigationActive }) => {
  const [newBook, setNewBook] = useState({
    id: Date.now(),
    bookTitle: '',
    authorName: '',
    category: '',
    ISBN: '',
  });

  useEffect(() => {
    if (editedBook) {
      setNewBook({ ...newBook, ...editedBook });
    }
  }, [editedBook]);

  const [hasError, setHasError] = useState({
    bookTitle: false,
    authorName: false,
    category: false,
    ISBN: false,
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewBook({ ...newBook, [name]: value });
    setHasError({ ...hasError, [name]: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newBook.bookTitle === '') {
      setHasError((prevState) => ({ ...prevState, bookTitle: true }));
    }

    if (newBook.authorName === '') {
      setHasError((prevState) => ({ ...prevState, authorName: true }));
    }

    if (newBook.category === '') {
      setHasError((prevState) => ({ ...prevState, category: true }));
    }

    if (newBook.ISBN === '') {
      setHasError((prevState) => ({ ...prevState, ISBN: true }));
    }

    if (newBook.id
      && newBook.bookTitle.length && newBook.authorName.length && newBook.ISBN.length) {
      setBooks((prevState) => {
        if (prevState.some((book) => book.id === newBook.id)) {
          editBookAPI(newBook.id, newBook);
          return prevState.map((book) => (book.id === newBook.id ? newBook : book));
        }
        return [...prevState, newBook];
      });

      setBooksAPI(newBook);

      setNewBook({
        id: Date.now(),
        bookTitle: '',
        authorName: '',
        category: '',
        ISBN: '',
      });

      setNavigationActive('DASHBOARD');
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Field
          className={hasError.bookTitle ? 'error' : ''}
          value={newBook.bookTitle}
          onChange={handleChange}
          name="bookTitle"
          control={Input}
          label="Book title"
          placeholder="Book title"
        />
        <Form.Field
          className={hasError.authorName ? 'error' : ''}
          value={newBook.authorName}
          onChange={handleChange}
          name="authorName"
          control={Input}
          label="Author name"
          placeholder="Author name"
        />
        <Form.Field
          className={hasError.category ? 'error' : ''}
          value={newBook.category}
          onChange={handleChange}
          name="category"
          control={Select}
          label="Category"
          options={options}
          placeholder="Category"
        />
        <Form.Field
          className={hasError.ISBN ? 'error' : ''}
          value={newBook.ISBN}
          onChange={handleChange}
          name="ISBN"
          control={Input}
          label="ISBN"
          placeholder="ISBN"
        />
      </Form.Group>

      <Form.Field control={Button}>Add a Book</Form.Field>
    </Form>
  );
};

BookForm.propTypes = {
  setBooks: PropTypes.func.isRequired,
  editedBook: PropTypes.shape({
    id: PropTypes.number,
    bookTitle: PropTypes.string,
    authorName: PropTypes.string,
    category: PropTypes.string,
    ISBN: PropTypes.string,
  }).isRequired,
  setNavigationActive: PropTypes.func.isRequired,
};
