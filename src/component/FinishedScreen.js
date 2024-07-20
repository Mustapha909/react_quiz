function FinishedScreen({ points, maxpossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxpossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> / {maxpossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishedScreen;
