import React from "react";
//import PropTypes from "prop-types";
//import styles from "./Section.module.css";
import Section from "./components/Section/Section.js";
import Statistics from "./components/Statistics/Statistics.js";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.js";
import Notification from "./components/Notification/Notification.js";
//import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    //console.log(props);
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return total > 0 ? (100 * this.state.good) / total : 0;
  }

  onClickGood = (ev) => {
    //console.log("click");
    this.setState({ good: this.state.good + 1 });
  };
  onClickNeutral = (ev) => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  onClickBad = (ev) => {
    this.setState({ bad: this.state.bad + 1 });
  };

  render() {
    const buttonsOptions = [
      { id: "id-1", name: "Good", handleClick: this.onClickGood },
      { id: "id-2", name: "Neutral", handleClick: this.onClickNeutral },
      { id: "id-3", name: "Bad", handleClick: this.onClickBad },
    ];
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={buttonsOptions} />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
