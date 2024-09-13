
import React from 'react';
import MyImageComponent from '@components/MyImageComponent';
import '@styles/globals.css'

export default {
  title: 'Components/TypeBox', 
  component: MyImageComponent,        
};

const Template = (args) => <MyImageComponent {...args} />;

export const Nomal = Template.bind({});
export const Fire = Template.bind({});


Nomal.args = {
  type:"노말"
}

Fire.args = {
  type : "불꽃"
}