import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header(props) {
  return (
    <div className="Header-header">
      <strong className="Header-center-span">
        {props.title}
      </strong>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
