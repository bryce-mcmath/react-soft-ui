import React from "react";
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import SoftCard from "./SoftCard";

describe("Running Test for SoftCard", () => {

  test("Check SoftCard renders", () => {
    render(<SoftCard></SoftCard>)
  });

});