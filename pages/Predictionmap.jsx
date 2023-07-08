import React from "react";

function Predictionmap(predictions) {
  return (
    <div>
      {predictions.predictions.map((item, index) => (
        <p>
          {index + 1}  , confidence:
          {item.confidence.toFixed(2)}
        </p>
      ))}
    </div>
  );
}

export default Predictionmap;
