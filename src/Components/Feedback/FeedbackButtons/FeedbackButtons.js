import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackButtons.module.css';

const FeedbackButtons = ({ onGood, onNeutral, onBad }) => (
  <div className={s.btnWrap}>
    <li className={s.btnItem}>
      <button type="button" className={s.btn} onClick={onGood}>
        Good
      </button>
    </li>
    <li className={s.btnItem}>
      {' '}
      <button type="button" className={s.btn} onClick={onNeutral}>
        Neutral
      </button>
    </li>
    <li className={s.btnItem}>
      {' '}
      <button type="button" className={s.btn} onClick={onBad}>
        Bad
      </button>
    </li>
  </div>
);

FeedbackButtons.propTypes = {
  onGood: PropTypes.string,
  onNeutral: PropTypes.string,
  onBad: PropTypes.string,
};

export default FeedbackButtons;
