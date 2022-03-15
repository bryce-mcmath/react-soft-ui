import React, { FC } from 'react';
import styled from 'styled-components';

import { SoftCardProps } from "./SoftCard.types";

const StyledSoftCard = styled.div<SoftCardProps>`
  border: none;
  border-radius: ${props => props.rounded ? '40px': '5px'};
  font-family: inherit;
  color: var(--soft-text-primary);
  background-color: var(--soft-bg-color);
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  padding: ${props => props.padding ? props.padding : '16px'};
  box-shadow: ${props => {
    if (props.inset) {
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
    } else {
      return 'inset 1px 1px 1px var(--soft-light-high), ' +
		    '-1px -1px 1px var(--soft-light-low), ' +
		    '-2px -2px 3px var(--soft-light-low), ' +
		    '-4px -4px 8px var(--soft-light-low), ' +
		    '-6px -6px 12px var(--soft-light-low), ' +
		    'inset -1px -1px 1px var(--soft-shadow-low), ' +
		    '1px 1px 1px var(--soft-shadow-high), ' +
		    '2px 2px 3px var(--soft-shadow-high), ' +
		    '4px 4px 8px var(--soft-shadow-high), ' +
		    '6px 6px 12px var(--soft-shadow-high)';
    }
  }};
`;


const SoftCard: FC<SoftCardProps> = ({height, width, padding, rounded, inset, children, ...props}) => {
  return (
    <StyledSoftCard height={height} width={width} padding={padding} rounded={rounded} inset={inset} {...props}>
      { children }
    </StyledSoftCard>
  );
};

export default SoftCard;