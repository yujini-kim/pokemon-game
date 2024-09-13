import PokemonCard from '@components/PokemonCard';
import '@styles/globals.css'

export default {
  title: 'Components/PokemonCard',  
  component: PokemonCard,           
};

const Template = (args) => <PokemonCard {...args} />;

export const 이상해씨 = Template.bind({});

이상해씨.args = {
   number : '001',
   name : '이상해씨',
   types : [
    { name: '풀', imgSrc: '/img/풀.webp' },  // 타입 1
    { name: '독', imgSrc: '/img/독.webp' }   // 타입 2
  ]
}
