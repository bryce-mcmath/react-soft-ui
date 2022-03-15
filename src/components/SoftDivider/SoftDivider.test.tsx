import React from "react";
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import SoftDivider from "./SoftDivider";

describe("Running Test for SoftDivider", () => {

  test("Check SoftDivider renders", () => {
    render(<SoftDivider></SoftDivider>)
  });

});