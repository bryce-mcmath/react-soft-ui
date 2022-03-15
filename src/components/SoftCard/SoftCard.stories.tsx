import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import SoftCard from './SoftCard';
import SoftDivider from '../SoftDivider/SoftDivider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'react-soft-ui/SoftCard',
  component: SoftCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SoftCard>;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  margin: 4px 0;
`;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ContentTemplate: ComponentStory<typeof SoftCard> = (args) => {
  return (
    <SoftCard {...args}>
      <StyledDiv>
        <h3>Word of the day</h3>
        <StyledH2>fool•ish</StyledH2>
        <SoftDivider/>
        <p><em>adjective</em></p>
        <h4>lacking good sense or judgement. "it was foolish to attempt"</h4>
      </StyledDiv>
    </SoftCard>
  );
};

export const Content = ContentTemplate.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Content.args = {
  height: '',
  width: '',
  padding: '',
  rounded: false,
  inset: false,
};

const EmptyTemplate: ComponentStory<typeof SoftCard> = (args) => {
  return (
    <SoftCard {...args}>
    </SoftCard>
  );
};

export const Empty = EmptyTemplate.bind({});

Empty.args = {
  height: '200px',
  width: '200px',
  padding: '32px',
  rounded: false,
  inset: false,
};