import React from "react";
import MainContent from '@components/MainContent'
import { components } from "storybook/internal/components";
import '@styles/globals.css';

export default {
    title : 'Components/MainContent',
    components : MainContent
}

const Template = (args) => <MainContent {...args} />;

export const Item = Template.bind({});

Item.args = {

}