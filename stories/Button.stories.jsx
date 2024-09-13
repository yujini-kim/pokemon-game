import Button from '@components/Button';
import '@styles/globals.css';

export default {
  title: 'Components/Button',  
  component: Button,          
};

const Template = (args) => <Button {...args} />;


export const Restart = Template.bind({});
export const GameInf = Template.bind({})

// 스토리에서 사용할 args 설정
Restart.args = {
    text: "다시시작", 
    onClick: () => alert('다시시작'),  
};

GameInf.args = {
    text: "게임설명"
}