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
var object = {};

arrFamily.forEach((colorFamily) => {
  for (let i = 0; i <= 100; i+=10) {
    const colorValue = colorFamily + "-" + i;
    const colorHex = 
    console.log(colorValue);
    arr.push(colorValue);
    object = Object.assign({colorValue: }, object);
    console.log(object);
  }
});

export default {
  title: "Tokens/Colors",
  argTypes: {
    modifier: {
      options: Object.keys(object),
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
