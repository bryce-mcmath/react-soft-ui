import { MouseEventHandler } from "react";
import { StyledIcon } from "styled-icons/types";

export interface SoftIconButtonProps {
  icon: StyledIcon,
  colored?: boolean,
  disabled?: boolean,
  size?: "s" | "m" | "l",
  rounded?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement>
};