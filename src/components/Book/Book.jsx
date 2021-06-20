import PropTypes from 'prop-types';
import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import { removeBookAPI } from '../../api';

export const Book = ({
  id,
  bookTitle,
  authorName,
  category,
  ISBN,
  handleEdit,
  handleRemove,
}) => (
  <Table.Row>
    <Table.Cell>{bookTitle}</Table.Cell>
    <Table.Cell>{authorName}</Table.Cell>
    <Table.Cell>{category}</Table.Cell>
    <Table.Cell>{ISBN}</Table.Cell>
    <Table.Cell>
      <Button
        basic
        color="grey"
        content="Edit"
        onClick={() => handleEdit(id)}
      />
      <Button
        basic
        color="red"
        content="Delete"
        onClick={() => {
          handleRemove(id);
          removeBookAPI(id);
        }}
      />
    </Table.Cell>
  </Table.Row>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  bookTitle: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  ISBN: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
