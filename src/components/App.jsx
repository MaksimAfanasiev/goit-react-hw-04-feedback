import { Component } from "react"

import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback(good, neutral, bad) {
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(good, neutral, bad) {
    const total = good + neutral + bad;
    return total ? Math.round(good / total * 100) : 0
  }

  onBtnClick = (option) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [option]: prevState[option] + 1,
      }
    })
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positive = this.countPositiveFeedbackPercentage(good, neutral, bad);
    const feedbackOptions = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.onBtnClick} />
        </Section>
        <Section title="Statistics">
          {
            total === 0
              ? <Notification message="There is no feedback" />
              : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive} />
          }
        </Section>
      </>
    )
  }
}
