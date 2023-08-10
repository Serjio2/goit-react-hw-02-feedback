import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const Feedback = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
  title,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <FeedbackOptions
        onClickGood={onClickGood}
        onClickNeutral={onClickNeutral}
        onClickBad={onClickBad}
      />
    </>
  );
};
