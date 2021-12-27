/* eslint-disable no-console */
import Component from "./usa-colors.twig";
import SystemColorList from './usa-colors~vars';

console.log(SystemColorList);

export default {
  title: "Tokens/Colors",
  argTypes: {
    system_colors: {
      control: { type: 'select' },
      defaultValue: 'blue-5',
      mapping: SystemColorList,
      name: 'System Color Tokens',
      options: SystemColorList,
    },
    token_type: {
      control: { type: 'text' },
      defaultValue: 'System',
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => Component(args);

export const SystemColorTokens = Template.bind({});
