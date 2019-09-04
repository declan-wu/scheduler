import React, { useState } from "react";

const useVisualMode = initial => {
  const [mode, setMode] = useState(initial);
  const transition = newState => setMode(newState);
  return { mode, transition };
};

export default useVisualMode;
