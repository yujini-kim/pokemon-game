import React from 'react';
import LightYellowBox from '@components/ligthYellow';
import '@styles/globals.css'

export default {
    title : 'Components/LightYellowBox',
    component : LightYellowBox
}

const Template = (args) => <LightYellowBox {...args} />;


export const searchBox = Template.bind({});

searchBox.args = {
    text : "이름/번호검색"
}