import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
}

handleClickGood = () => {
  this.setState( (prevState) => {
      return {
          good: prevState.good + 1,
      }
  })
}

handleClickNeutral = () => {
  this.setState( (prevState) => {
      return {
          neutral: prevState.neutral + 1,
      }
  })
}

handleClickBad = () => {
  this.setState( (prevState) => {
      return {
          bad: prevState.bad + 1,
      }
      
  })
}

countTotalFeedback = () => {
  return this.state.good + this.state.neutral + this.state.bad;
}

countPositiveFeedbackPercentage = () => {
  const total = this.state.good + this.state.neutral + this.state.bad;
  if ( total === 0 ) {
      return total
  } else {
      return Math.round(this.state.good * 100 / total );
  }
}

  render() {
  return (
    <>
      <GlobalStyle/>
      <Feedback onClickGood={this.handleClickGood} onClickNeutral={this.handleClickNeutral} onClickBad={this.handleClickBad}/>
      <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
    </>
  );
  }
};
