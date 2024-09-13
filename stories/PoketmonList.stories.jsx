import React from 'react';
import PoketmonList from '@components/PoketmonList';
import '@styles/globals.css';

export default {
  title: 'Components/PoketmonList',  // 스토리북에서 그룹화되는 이름
  component: PoketmonList,  // 사용할 컴포넌트
};

// 기본 템플릿 생성
const Template = (args) => <PoketmonList {...args} />;

// 기본 상태의 PoketmonList 스토리
export const DefaultPoketmonList = Template.bind({});
DefaultPoketmonList.args = {
  poketmons: [
    {
      number: '001',
      name: '이상해씨',
      types: [
        { name: '풀', imgSrc: '/img/풀.webp' },
        { name: '독', imgSrc: '/img/독.webp' },
      ],
    },
    {
      number: '025',
      name: '피카츄',
      types: [
        { name: '전기', imgSrc: '/img/전기.webp' },
      ],
    },
    {
      number: '150',
      name: '뮤츠',
      types: [
        { name: '에스퍼', imgSrc: '/img/에스퍼.webp' },
      ],
    },
  ],
};