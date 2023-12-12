import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = e => {
    const property = e.target.name;
    this.setState(prevState => ({ [property]: prevState[property] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.state.good;
    const positivePercentage = (positiveFeedback / totalFeedback) * 100;

    if (totalFeedback === 0) {
      return 0;
    }
    return parseInt(positivePercentage);
  };
  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          fontSize: 30,
          color: '#010101',
          padding: '30px',
          gap: '30px',
        }}
      >
        <Section title={'Please leave feedbackk'}>
          <FeedbackOptions options={options} increment={this.handleIncrement} />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
