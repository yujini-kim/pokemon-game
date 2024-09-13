import React from 'react';
import TypeSkeleton from '@components/typeSkeleton' 
import '@styles/globals.css'

export default {
  title: 'Components/TypeSkeleton',  
  component: TypeSkeleton,
};

const Template = (args) => <TypeSkeleton {...args} />;

export const Loading = Template.bind({});
Loading.args = {};