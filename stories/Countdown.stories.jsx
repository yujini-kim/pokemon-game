// Countdown.stories.jsx
import Countdown from '@components/Countdown';
import '@styles/globals.css'

export default {
  title: 'Components/Countdown',  
  component: Countdown,           
};

// 기본 템플릿 함수 생성
const Template = (args) => <Countdown {...args} />;

// 기본 상태 스토리
export const thirtySecond = Template.bind({});
export const teenSecond = Template.bind({})

thirtySecond.args = {
  initialTime :30
};

teenSecond.args = {
  initialTime :10
};

