import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ message = 'No feedback' }) {
  return <p>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
