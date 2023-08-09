import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"

export const Feedback = ({onClickGood, onClickNeutral, onClickBad}) => {
  
    return (
        <div>
            <h2>Please leave feedback</h2>
            <FeedbackOptions onClickGood={onClickGood} onClickNeutral={onClickNeutral} onClickBad={onClickBad}/>
        </div>
    )
    
}