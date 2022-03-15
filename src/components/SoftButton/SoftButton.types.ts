import { MouseEventHandler } from "react"

export interface SoftButtonProps {
  label?: string,
  colored?: boolean,
  disabled?: boolean,
  size?: "s" | "m" | "l",
  rounded?: boolean,
  block?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement>
}