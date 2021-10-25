import React from 'react';
import Section from './Components/Feedback/Section/Section';
import FeedbackButtons from './Components/Feedback/FeedbackButtons/FeedbackButtons';
import Statistics from './Components/Feedback/Statistics/Statistics';
import Notification from './Components/Feedback/Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleOnNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleOnBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = 0;
    if (this.state.good !== 0) {
      positiveFeedbackPercentage = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100,
      );
    }
    return positiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackButtons
            onGood={this.handleOnGood}
            onNeutral={this.handleOnNeutral}
            onBad={this.handleOnBad}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
