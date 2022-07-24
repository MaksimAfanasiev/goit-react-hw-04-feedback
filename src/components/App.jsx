import { useState } from "react"

import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const total = good + neutral + bad;

  const positive = total !== 0 ? Math.round(good / total * 100): 0;

  function onBtnClick(option) {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;
        
      default:
        break;
    }
  }

    return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onBtnClick} />
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