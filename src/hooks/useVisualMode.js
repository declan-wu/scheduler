import React, { useState } from "react";

const useVisualMode = initial => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newState, replace = false) => {
    setHistory(preState => {
      if (replace) {
        preState.pop();
      }
      preState.push(newState);
      return preState;
    });
    setMode(newState);
  };

  const back = () => {
    if (history.length === 1) {
      return;
    }
    setHistory(preState => {
      preState.pop();
      setMode(preState[preState.length - 1]);
      return preState;
    });
  };
  return { mode, transition, back };
};

export default useVisualMode;
