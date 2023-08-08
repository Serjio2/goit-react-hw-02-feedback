import { Component } from "react"

export class Feedback extends Component {
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

    // countTotalFeedback = () => {
    //     this.setState(
    //         this.state.good
    //     )
    // }

    render() {
    return (
        <div>
            <h2>Please leave feedback</h2>
            <button onClick={this.handleClickGood}>Good</button>
            <button onClick={this.handleClickNeutral}>Neutral</button>
            <button onClick={this.handleClickBad}>Bad</button>
            <h2>Statistics</h2>
            <p>Good: <span>{this.state.good}</span></p>
            <p>Neutral: <span>{this.state.neutral}</span></p>
            <p>Bad: <span>{this.state.bad}</span></p>
            <p>Total: <span>{}</span></p>
        </div>
    )
    }
}