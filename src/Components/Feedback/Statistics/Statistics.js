import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <ul className={s.list}>
    <li className={s.itemNotify}>Good: {good}</li>
    <li className={s.itemNotify}>Neutral: {neutral}</li>
    <li className={s.itemNotify}>Bad: {bad}</li>
    <li className={s.itemNotify}>Total: {total}</li>
    <li className={s.itemNotify}>
      Positive feedback: {`${positiveFeedback}%`}
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export default Statistics;
