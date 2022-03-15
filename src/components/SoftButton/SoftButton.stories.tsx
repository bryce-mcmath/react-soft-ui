import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import SoftButton from './SoftButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'react-soft-ui/SoftButton',
  component: SoftButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SoftButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PrimaryTemplate: ComponentStory<typeof SoftButton> = (args) => {
  return (<SoftButton {...args}></SoftButton>);
}

export const Default = PrimaryTemplate.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Default',
  colored: false,
  size: 'm',
  disabled: false,
  rounded: false,
  block: false,
  onClick: () => {}
};

const StyledSpan = styled.span`
  text-decoration: underline;
`;

const ChildrenTemplate: ComponentStory<typeof SoftButton> = (args) => {
  return (<SoftButton {...args}><StyledSpan>Check children render properly</StyledSpan></SoftButton>);
};

export const WithChildren = ChildrenTemplate.bind({});

WithChildren.args = {
  label: '',
  colored: false,
  size: 'm',
  disabled: false,
  rounded: false,
  block: false,
  onClick: () => {}
};