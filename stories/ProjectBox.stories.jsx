import React from "react";
import ProjectBox from '@components/ProjectBox'
import Image from 'next/image';
import '@styles/globals.css';
export default {
    title : 'Components/ProjectBox',
    component : ProjectBox
}

const Template = (args) => <ProjectBox {...args} />;

export const ProjectBox1 = Template.bind({});
export const ProjectBox2 = Template.bind({});
ProjectBox1.args = {
    src : "./img/picachu.webp",
    alt : 'picacuh',
    title : '포켓몬 도감 모으기 게임',
    description : '간단한 설명',
    link : ''
}

ProjectBox2.args = {
    src : "./img/preparing.webp",
    alt : 'preparing',
    title : '준비중',
    description : '간단한 설명',
    link : ''
}