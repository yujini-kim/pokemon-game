import React from 'react';
import FilterBox from '@components/FilterBox';
import '@styles/globals.css';

export default {
  title: 'Components/FilterBox',  
  component: FilterBox,  
};


const Template = (args) => <FilterBox {...args} />;


export const DefaultFilterBox = Template.bind({});
DefaultFilterBox.args = {};