import React from 'react';
import YellowBox from '@components/YellowBox'
import Image from 'next/image';
import '@styles/globals.css'

export default {
  title: 'Components/YellowBox',  
  component: YellowBox,
};

const Template = (args) => <YellowBox {...args} />;

export const Ball = Template.bind({});
Ball.args = {
    coinAmount : '5',
    ballSrc : '/img/ball.webp', 
    ballText : 'C',
};