import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

export function App() {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setFeedbackState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = feedbackState;
    return good + neutral + bad;
  };

  const positivePercent = () => {
    const { good } = feedbackState;
    const total = totalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const { good, neutral, bad } = feedbackState;
  const total = totalFeedback();
  const percent = positivePercent();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackState)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percent={percent}
        />
      </Section>
    </>
  );
}

export default App;
