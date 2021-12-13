import {
  Blue,
  Red,
 } from "../../data/colors";
import Component from "./usa-colors.twig";

const arrFamily = [
  'Blue',
  'Red'
];
const arr = [];

arrFamily.forEach((colorFamily) => {
  for (let i = 0; i <= 100; i+=10) {
    const colorValue = colorFamily + "-" + i;
    arr.push(colorValue);
  }
});

console.log(arr);
document.getElementById('list').innerHTML = 'html data';



export default {
  title: "Tokens/Colors",
  argTypes: {
    modifier: {
      options: [
        arr
      ],
      control: { type: 'select' },
    },
    display_element_states: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
};


const Template = (args) => Component(args);

export const Default = Template.bind({});
