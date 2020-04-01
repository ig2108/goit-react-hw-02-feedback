import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ props }) => {
  const { good, neutral, bad, total, percentageGood } = props;
  return (
    <ul className={styles.statisticList}>
      <li className={styles.statisticItem}>Good: {good}</li>
      <li className={styles.statisticItem}>Neutral: {neutral}</li>
      <li className={styles.statisticItem}>Bad: {bad}</li>
      {total && <li className={styles.statisticItem}>Total: {total}</li>}
      {total && (
        <li className={styles.statisticItem}>
          Positive feedback: {percentageGood} %
        </li>
      )}
    </ul>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    percentageGood: PropTypes.number,
  }),
};

export default Statistics;
