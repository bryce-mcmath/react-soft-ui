import React, { FC } from 'react';
import styled from 'styled-components';

import { SoftDividerProps } from "./SoftDivider.types";

const StyledSoftDivider = styled.div<SoftDividerProps>`
  border: none;
  border-radius: ${props => props.borderRadius ? props.borderRadius : '3px'};
  color: var(--soft-text-primary);
  background-color: var(--soft-bg-color);
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '8px'};
  margin: ${props => props.margin ? props.margin : '8px 0'};
  box-shadow: 
    inset 1px 1px 1px var(--soft-light-high),
    -1px -1px 1px var(--soft-light-low),
    -2px -2px 3px var(--soft-light-low),
    -4px -4px 8px var(--soft-light-low),
    -6px -6px 12px var(--soft-light-low),
    inset -1px -1px 1px var(--soft-shadow-low),
    1px 1px 1px var(--soft-shadow-high),
    2px 2px 3px var(--soft-shadow-high),
    4px 4px 8px var(--soft-shadow-high),
    6px 6px 12px var(--soft-shadow-high);
`;


const SoftDivider: FC<SoftDividerProps> = ({height, width, margin, borderRadius, ...props}) => {
  return (
    <StyledSoftDivider height={height} width={width} margin={margin} borderRadius={borderRadius} {...props}></StyledSoftDivider>
  );
};

export default SoftDivider;