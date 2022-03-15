import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { material } from 'styled-icons';

import SoftIconButton from './SoftIconButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'react-soft-ui/SoftIconButton',
  component: SoftIconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SoftIconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PrimaryTemplate: ComponentStory<typeof SoftIconButton> = (args) => {
  return (<SoftIconButton {...args}></SoftIconButton>);
}

export const Analytics = PrimaryTemplate.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Analytics.args = {
  icon: material.Analytics,
  colored: false,
  size: 'm',
  disabled: false,
  rounded: false,
  onClick: () => {}
};

export const BackArrow = PrimaryTemplate.bind({});

BackArrow.args = {
  icon: material.ArrowBack,
  colored: false,
  size: 'm',
  disabled: false,
  rounded: false,
  onClick: () => {}
};

export const Home = PrimaryTemplate.bind({});

Home.args = {
  icon: material.Home,
  colored: false,
  size: 'm',
  disabled: false,
  rounded: false,
  onClick: () => {}
};