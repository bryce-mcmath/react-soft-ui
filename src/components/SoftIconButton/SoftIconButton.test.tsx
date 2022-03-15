import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { material } from 'styled-icons';

import SoftIconButton from "./SoftIconButton";

describe("Running Test for SoftIconButton", () => {

  test("Check SoftIconButton renders", () => {
    render(<SoftIconButton icon={material.AccountCircle}></SoftIconButton>)
  });
  
  test("Check SoftIconButton is disabled", () => {
    render(<SoftIconButton icon={material.AccountCircle} disabled></SoftIconButton>)
    expect(screen.getByRole('button')).toBeDisabled();
  });

});