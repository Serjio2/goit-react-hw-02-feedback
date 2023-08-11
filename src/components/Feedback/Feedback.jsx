import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const Feedback = ({
  options,
  onLeaveFeedback,
  title,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <FeedbackOptions
      options={options}
      onLeaveFeedback={onLeaveFeedback}
      />
    </>
  );
};
