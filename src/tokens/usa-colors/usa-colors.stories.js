import Component from "./usa-colors.twig";
import * as data from '../../data/colors';

const myObject = {};

for (let i = 0; i < 10; i++) {
  // access color family properties
  const colorFamily = data.Red.props[0];

  // loop through each value entry
  const colorValues = colorFamily.value[i];

  // collect the color family name and color grade
  const colorName = colorFamily.name + "-" + colorValues.name;

  // collect the hex value
  const colorHex = colorValues.value;

  //print to object to send to modified options
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
  },
};


const Template = (args) => Component(args);

export const Default = Template.bind({});
