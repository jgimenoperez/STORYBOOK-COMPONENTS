import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyProductCard } from '../../components/ProductCard';


export default {
    title: 'UI2/ProductCard',
    component: MyProductCard,
    argTypes: {

    }    
} as ComponentMeta<typeof MyProductCard>

const Template: ComponentStory<typeof MyProductCard> = (args) => <MyProductCard { ...args } />


export const Basic = Template.bind({});
Basic.args = {
    count: 7,
    color:'red',
  
    //background2:{backgroundColor: color  } 
}


// export const AllCaps = Template.bind({});
// AllCaps.args = {
//     size: 'normal',
//     allCaps: true
// }

// export const Secondary = Template.bind({});
// Secondary.args = {
//     size: 'normal',
//     color: 'secondary' // primary | secondary | tertiary
// }

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//     size: 'normal',
//     color: 'tertiary'
// }

// export const Size = Template.bind({});
// Size.args = {
//     size: 'small',
//     color: 'tertiary'
// }



// export const CustomFontColor = Template.bind({});
// CustomFontColor.args = {
//     size: 'h1',
//     fontColor: '#5517ac'
// }

// export const CustomBackgroundColor = Template.bind({});
// CustomBackgroundColor.args = {
//     size: 'h1',
//     fontColor: '#eeeeee',
//     backgroundColor: '#000000'
// }