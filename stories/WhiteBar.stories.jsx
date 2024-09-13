import React from 'react';
import whiteBar from '@components/WhiteBar' 
import '@styles/globals.css'

export default {
  title: 'Components/WhiteBar',  
  component: whiteBar,
};

const Template = (args) => <whiteBar {...args} />;

export const White = Template.bind({});
White.args = {};