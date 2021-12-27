/* eslint-disable no-console */
import Component from "./usa-colors.twig";
import SystemColorList from './usa-colors~vars';
import ThemeColorList from './usa-theme-colors~vars';

console.log(ThemeColorList);

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
    theme_colors: {
      control: { type: 'select' },
      name: 'Theme color palette',
      options: ThemeColorList,
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
