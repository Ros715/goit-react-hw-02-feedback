function FeedbackOptions({ options, onLeaveFeedback }) {
  //console.log(options);
  return (
    <div>
      {options.map((opt) => (
        <button type="button" onClick={opt.handleClick}>
          {opt.name}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
