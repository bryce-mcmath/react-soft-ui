import React, { FC } from 'react';
import styled from 'styled-components';

import { SoftButtonProps } from "./SoftButton.types";

const StyledSoftButton = styled.button<SoftButtonProps>`
  cursor: ${props => props.disabled ? 'not-allowed': 'pointer'};
  border: none;
  border-radius: ${props => props.rounded ? '40px': '5px'};
  display: inline-block;
  font-family: inherit;
  width: ${props => props.block ? '100%' : 'auto' };
  color: ${props => props.colored ? 'var(--soft-bg)' : 'var(--soft-text-primary)'};
  background-color: ${props => props.colored ? 'var(--soft-color)' : 'var(--soft-bg-color)'};
  padding: ${props => {
    if (props.size === 's') {
      return '8px 16px';
    } else if (props.size === 'l') {
      return '24px 32px';
    } else {
      return '16px 24px';
    }
  }};
  box-shadow: 
    inset 1px 1px 1px var(--soft-light-high),
		-2px -2px 2px var(--soft-light-low),
		-4px -4px 6px var(--soft-light-low),
		-8px -8px 16px var(--soft-light-low),
		-12px -12px 24px var(--soft-light-low),
		inset -1px -1px 1px var(--soft-shadow-low),
		2px 2px 2px var(--soft-shadow-high),
		4px 4px 6px var(--soft-shadow-high),
		8px 8px 16px var(--soft-shadow-high),
		12px 12px 24px var(--soft-shadow-high);
	transition: 
		color 0.3s,
		box-shadow 0.6s;
  &:hover {
    color: ${props => {
      if (props.disabled && props.colored) {
        return 'var(--soft-bg)';
      } else if (props.disabled) {
        return 'var(--soft-text-primary)';
      } else if (props.colored) {
        return 'var(--soft-bg)';
      } else {
        return 'var(--soft-color)';
      }
    }};
    box-shadow: ${ props => {
      if (props.disabled) {
        return 'inset 1px 1px 1px var(--soft-light-high), ' +
          '-2px -2px 2px var(--soft-light-low), ' +
          '-4px -4px 6px var(--soft-light-low), ' +
          '-8px -8px 16px var(--soft-light-low), ' +
          '-12px -12px 24px var(--soft-light-low), ' +
          'inset -1px -1px 1px var(--soft-shadow-low), ' +
          '2px 2px 2px var(--soft-shadow-high), ' +
          '4px 4px 6px var(--soft-shadow-high), ' +
          '8px 8px 16px var(--soft-shadow-high), ' +
          '12px 12px 24px var(--soft-shadow-high)'
      } else {
        return 'inset 1px 1px 1px var(--soft-light-high), ' + 
          '-3px -3px 3px var(--soft-light-high), ' +
          '-5px -5px 6px var(--soft-light-high), ' +
          '-10px -10px 16px var(--soft-light-high), ' +
          '-14px -14px 24px var(--soft-light-high), ' +
          'inset -1px -1px 1px var(--soft-shadow-low), ' +
          '3px 3px 3px var(--soft-shadow-high), ' +
          '5px 5px 6px var(--soft-shadow-high), ' +
          '10px 10px 16px var(--soft-shadow-high), ' +
          '14px 14px 24px var(--soft-shadow-high)'
      }
    }
  };
  &:active {
    color: ${props => {
      if (props.colored) {
        return 'var(--soft-bg)';
      } else {
        return 'var(--soft-color)';
      }
    }};
    box-shadow: ${ props => {
      if (props.colored) {
        return '1px 1px 1px var(--soft-light-high), ' +
          'inset -2px -2px 2px var(--soft-color-highlight), ' +
          'inset -3px -3px 4px var(--soft-color-highlight), ' +
          'inset -6px -6px 12px var(--soft-color-highlight), ' +
          'inset -8px -8px 16px var(--soft-color-highlight), ' +
          '-1px -1px 1px var(--soft-shadow-low), ' +
          'inset 2px 2px 2px var(--soft-shadow-high), ' +
          'inset 3px 3px 4px var(--soft-shadow-high), ' + 
          'inset 6px 6px 12px var(--soft-shadow-high), ' +
          'inset 8px 8px 16px var(--soft-shadow-high)';
      } else {
        return '1px 1px 1px var(--soft-light-high), ' +
          'inset -2px -2px 2px var(--soft-light-low), ' +
          'inset -3px -3px 4px var(--soft-light-low), ' +
          'inset -6px -6px 12px var(--soft-light-low), ' +
          'inset -8px -8px 16px var(--soft-light-low), ' +
          '-1px -1px 1px var(--soft-shadow-low), ' +
          'inset 2px 2px 2px var(--soft-shadow-high), ' +
          'inset 3px 3px 4px var(--soft-shadow-high), ' + 
          'inset 6px 6px 12px var(--soft-shadow-high), ' +
          'inset 8px 8px 16px var(--soft-shadow-high)';
      }
    }
  };
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SoftButton: FC<SoftButtonProps> = ({label, size = 'm', colored, disabled, onClick, children, ...props}) => {
  return (
    <StyledSoftButton type="button" onClick={onClick} colored={colored} disabled={disabled} size={size} {...props}>
        {label ? label : <StyledSpan>{children}</StyledSpan>}
    </StyledSoftButton>
  )
};

export default SoftButton;