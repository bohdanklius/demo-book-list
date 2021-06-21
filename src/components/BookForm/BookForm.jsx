import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
} from 'semantic-ui-react';
import { editBookAPI, setBooksAPI } from '../../api';
import { BOOK, DASHBOARD } from '../../variables';
import './BookForm.scss';

const options = [
  { key: 0, text: 'Category', value: 'Category' },
  { key: 0, text: 'Other', value: 'Other' },
  { key: 1, text: 'Picture books', value: 'Picture books' },
  { key: 2, text: 'Educational material', value: 'Educational material' },
  { key: 3, text: 'Crime, Thriller & Mystery', value: 'Crime, Thriller & Mystery' },
  { key: 4, text: 'Science Fiction & Fantasy', value: 'Science Fiction & Fantasy' },
  { key: 5, text: 'Biographies', value: 'Biographies' },
  { key: 6, text: 'Teaching & higher education', value: 'Teaching & higher education' },
];

export const BookForm = ({ setBooks, editedBook, setNavigationActive }) => {
  const [newBook, setNewBook] = useState(BOOK);

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

    if (
      newBook.id
      && newBook.bookTitle.length
      && newBook.authorName.length
      && newBook.category.length
      && newBook.ISBN.length
    ) {
      setBooks((prevState) => {
        if (prevState.some((book) => book.id === newBook.id)) {
          editBookAPI(newBook.id, newBook);
          return prevState.map((book) => (book.id === newBook.id ? newBook : book));
        }
        return [...prevState, newBook];
      });

      setBooksAPI(newBook);

      setNewBook(BOOK);

      setNavigationActive(DASHBOARD);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <div className="wrapper">
          <Form.Field
            className={hasError.bookTitle ? 'error' : ''}
            value={newBook.bookTitle}
            onChange={handleChange}
            name="bookTitle"
            control={Input}
            label="Book title"
            placeholder="Book title"
          />
          {hasError.bookTitle && (
            <p className="error__title">
              Pleace enter the Book title
            </p>
          )}
        </div>
        <div className="wrapper">
          <Form.Field
            className={hasError.authorName ? 'error' : ''}
            value={newBook.authorName}
            onChange={handleChange}
            name="authorName"
            control={Input}
            label="Author name"
            placeholder="Author name"
          />
          {hasError.authorName && (
            <p className="error__title">
              Pleace enter the Author name
            </p>
          )}
        </div>
        <div className="wrapper">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="category" className="category">Category</label>
          <select
            className={hasError.category ? 'error' : ''}
            name="category"
            label="Category"
            value={newBook.category}
            onChange={handleChange}
            id="category"
          >
            {options.map((option) => (
              <option key={option.key} value={option.value}>{option.text}</option>
            ))}
          </select>
          {hasError.category && (
            <p className="error__title">
              Pleace enter the Category
            </p>
          )}

        </div>
        <div className="wrapper">
          <Form.Field
            className={hasError.ISBN ? 'error' : ''}
            value={newBook.ISBN}
            onChange={handleChange}
            name="ISBN"
            control={Input}
            label="ISBN"
            placeholder="ISBN"
          />
          {hasError.ISBN && (
            <p className="error__title">
              Pleace enter the ISBN
            </p>
          )}
        </div>
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
