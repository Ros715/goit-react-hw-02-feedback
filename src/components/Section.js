import React from "react";
import Statistics from "./Statistics.js";
import FeedbackOptions from "./FeedbackOptions.js";
import Notification from "./Notification.js";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.title = props.title;
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
      { name: "Good", handleClick: this.onClickGood },
      { name: "Neutral", handleClick: this.onClickNeutral },
      { name: "Bad", handleClick: this.onClickBad },
    ];
    return (
      <div>
        <p>{this.title}</p>
        <FeedbackOptions options={buttonsOptions} />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default Section;
