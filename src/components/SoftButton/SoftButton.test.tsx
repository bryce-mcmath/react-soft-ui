import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import SoftButton from "./SoftButton";

describe("Running Test for SoftButton", () => {

  test("Check SoftButton renders", () => {
    render(<SoftButton>Default</SoftButton>);
  });
  
  test("Check SoftButton is disabled", () => {
    render(<SoftButton disabled>Default</SoftButton>)
    expect(screen.getByRole('button')).toBeDisabled();
  });

});