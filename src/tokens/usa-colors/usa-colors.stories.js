/* eslint-disable no-console */
import Component from "./usa-colors.twig";
import * as data from '../../data/colors';

const myObject = {};
const BlueCool = data.BlueCool.props[0];
const Red= data.Red.props[0];
const arrFamily = [Red, BlueCool];

arrFamily.forEach(family => {
  const colorFamily = family.name;
  console.log(colorFamily);

  for (let i = 0; i < 10; i += 1) {
    // loop through each value entry
    const colorValues = family.value[i];
    console.log(`Color value: ${colorValues}`)
  
    // collect the color family name and color grade
    const colorName = `${family.name}-${colorValues.name}`;
  
    // collect the hex value
    const colorHex = colorValues.value;
  
    // print to object to send to modified options
    myObject[colorName] = colorHex;
  };
});

console.log(myObject);

export default {
  title: "Tokens/Colors",
  argTypes: {
    modifier: {
      options: myObject,
      mapping: myObject,
      control: { type: 'select' },
    },
  },
};


const Template = (args) => Component(args);

export const Default = Template.bind({});
