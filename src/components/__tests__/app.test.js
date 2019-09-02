import React from "react";

import { render, cleanup } from "@testing-library/react";

import Application from "components/app/app.js";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application />);
});
