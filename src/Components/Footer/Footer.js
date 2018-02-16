import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

function Footer(props) {
  return (
    <div className="Footer-footer">
      <strong className="Footer-center-span">
        <button className="Footer-button" onClick={props.callback}>
          {props.title}
        </button>
      </strong>
    </div>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Footer;
