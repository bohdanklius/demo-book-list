import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const navigation = [
  { id: 1, title: 'Dashboard' },
  { id: 2, title: 'Add a Book' },
];

const DASHBOARD = 'DASHBOARD';
const BOOKFORM = 'BOOKFORM';

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
          setEditedBook({});
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
