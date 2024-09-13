import EggGame from '@components/EggGame'; 
import '@styles/globals.css'; 

export default {
  title: 'Components/EggGame',
  component: EggGame, 
};


const Template = (args) => <EggGame {...args} />;


export const DefaultEggGame = Template.bind({});
DefaultEggGame.args = {
};