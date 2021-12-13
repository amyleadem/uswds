import Component from "./usa-colors.twig";
import * as data from './test.json';
import {
  Blue,
  Red, 
  Yellow
} from "../../data/colors";
const arr = [];
const arrayValues = arr.values();
const arrows = { Red, Blue, Yellow };
const myObject = {};
 
for (let i = 0; i < 10; i++) {
  const colorFamily = data.props[0];
  const colorValues = data.props[0].value[i];
  const colorName = colorFamily.name + "-" + colorValues.name;
  const colorHex = colorValues.value;
  myObject[colorName] = colorHex;
};

console.log(myObject);

export default {
  title: "Tokens/Colors",
  argTypes: {
    modifier: {
      options: myObject,
      mapping: myObject,
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
