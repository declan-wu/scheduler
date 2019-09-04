import React, { useState } from "react";

const useVisualMode = initial => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = newState => {
    setHistory(preState => {
      preState.push(newState);
      console.log(preState);
      return preState;
    });
    setMode(newState);
  };
  const back = () => {
    setHistory(preState => {
      preState.pop();
      setMode(preState[preState.length - 1]);
      return preState;
    });
  };
  return { mode, transition, back };
};

export default useVisualMode;
