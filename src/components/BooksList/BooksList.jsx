import PropTypes from 'prop-types';
import React from 'react';
import { Table } from 'semantic-ui-react';
import { Book } from '../Book';

export const BooksList = ({ books, handleEdit, handleRemove }) => (
  <div className="books">
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Author</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>ISBN</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>

        {books.map(({
          id, bookTitle, authorName, category, ISBN,
        }) => (
          <Book
            handleRemove={handleRemove}
            handleEdit={handleEdit}
            key={id}
            id={id}
            bookTitle={bookTitle}
            authorName={authorName}
            category={category}
            ISBN={ISBN}
          />
        ))}
      </Table.Body>

    </Table>

  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    bookTitle: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    ISBN: PropTypes.string.isRequired,
  })).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
