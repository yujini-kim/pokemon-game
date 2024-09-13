import React from 'react';
import YellowBoxSkeleton from '@components/YellowBoxSkeleton'
import Image from 'next/image';
import '@styles/globals.css'

export default {
  title: 'Components/YellowBoxSkeleton',  
  component: YellowBoxSkeleton,
};

const Template = (args) => <YellowBoxSkeleton {...args} />;

export const Skeleton = Template.bind({});
Skeleton.args = {

};