import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onHandleLeaveFeedback }) => {
  return (
    <div className={styles.feedbackOptions}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onHandleLeaveFeedback}
          className={styles.feedbackButton}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onHandleLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
