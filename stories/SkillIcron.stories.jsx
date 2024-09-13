import SkillIcon from '@components/SkillIcon';
import '@styles/globals.css'

export default {
  title: 'Components/SkillIcon',  
  component: SkillIcon,           
};

const Template = (args) => <SkillIcon {...args} />;

export const JsIcon = Template.bind({});
export const HTMLIcon = Template.bind({});


JsIcon.args = {
   src : "./img/js.webp" ,
   alt : "JavaScript"
}

HTMLIcon.args = {
    src : "./img/HTML.webp" ,
    alt : "HTML"
}