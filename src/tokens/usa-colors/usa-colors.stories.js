import Component from "./usa-colors.twig";
import * as data from './test.json';
const arr = [];
const arrayValues = arr.values();
 
for (let i = 0; i < 10; i++) {
  const colorFamily = data.props[0];
  const colorValues = data.props[0].value[i];
  const value = "'" + colorFamily.name + "-" + colorValues.name + "'= " + colorValues.value;
  arr.push(value);
};

for (let elements of arrayValues) {
  console.log(elements);
};

export default {
  title: "Tokens/Colors",
  argTypes: {
    modifier: {
      options: [
        arrayValues,
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
