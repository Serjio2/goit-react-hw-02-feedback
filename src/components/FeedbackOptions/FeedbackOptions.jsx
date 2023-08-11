export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <>
      {Object.keys(options).map(item => (
        <button type="button" name={item} onClick={onLeaveFeedback}>
          {item.replace(item[0], item[0].toUpperCase())}
        </button>
      ))}
    </>
  );
};
