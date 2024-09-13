import React from 'react';
import Page from '@components/WhiteBox'
import '@styles/globals.css'

export default {
  title: 'Components/WhiteBox',  
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const TypeBox = Template.bind({});
TypeBox.args = {};