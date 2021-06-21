import PropTypes from 'prop-types';
import React from 'react';
import { BOOKFORM, DASHBOARD, BOOK } from '../../variables';
import './Header.scss';

const navigation = [
  { id: 1, title: 'Dashboard' },
  { id: 2, title: 'Add a Book' },
];

export const Header = ({ setNavigationActive, setEditedBook }) => (

  <div className="header">
    {navigation.map(({ id, title }) => (
      <button
        onClick={() => {
          if (id === 1) {
            setNavigationActive(DASHBOARD);
          } else {
            setNavigationActive(BOOKFORM);
          }
          setEditedBook(BOOK);
        }}
        className="header__button"
        key={id}
        type="button"
      >
        {title}
      </button>
    ))}
  </div>
);

Header.propTypes = {
  setNavigationActive: PropTypes.func.isRequired,
  setEditedBook: PropTypes.func.isRequired,
};
