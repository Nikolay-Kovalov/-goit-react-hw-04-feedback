import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { Layout } from "./Layout";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

    const addFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  
  const countTotalFeedback = () => {
    return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0
  };
 

  return (
    <Layout>
      <Section
        title="Please leave feedback" />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={addFeedback}
          
      />
      <Section />
      <Section title="Statistics" />
      {(good > 0 || neutral > 0 || bad) ? <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        <Section /></div> : <Notification message="There is no feedback" />}
      
    </Layout>
  )
}

