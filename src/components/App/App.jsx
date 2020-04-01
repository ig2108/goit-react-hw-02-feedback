import React, { Component } from 'react';
import styles from './App.module.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import SectionTitle from '../SectionTitle/SectionTitle';
import Notification from '../Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const grades = Object.values(this.state);
    const total = grades.reduce((acc, curr) => acc + curr, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentageGood =
      this.countTotalFeedback() &&
      Math.round((good / this.countTotalFeedback()) * 100);
    return percentageGood;
  };

  render() {
    return (
      <div className={styles.container}>
        <SectionTitle title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onHandleLeaveFeedback={this.handleLeaveFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statictics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              props={{
                ...this.state,
                total: this.countTotalFeedback(),
                percentageGood: this.countPositiveFeedbackPercentage(),
              }}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </SectionTitle>
      </div>
    );
  }
}
