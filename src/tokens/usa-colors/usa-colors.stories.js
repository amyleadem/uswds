/* eslint-disable no-console */
import Component from "./usa-colors.twig";
import SystemColorList from './usa-colors~vars';
import ThemeColorList from './usa-theme-colors~vars';


export default {
  title: "Tokens/Colors",
  argTypes: {
    system_colors: {
      control: { type: 'select' },
      mapping: SystemColorList,
      name: 'System color tokens',
      options: SystemColorList,
    },
    theme_colors: {
      control: { type: 'select' },
      name: 'Theme color tokens',
      options: ThemeColorList,
      table: { disable: true },
    },
    token_type: {
      control: { type: 'select' },
      defaultValue: 'system',
      options: [
        'system',
        'theme',
      ],
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => Component(args);

export const SystemColorTokens = Template.bind({});

export const ThemeColorTokens = Template.bind({});
ThemeColorTokens.argTypes = {
  token_type: { 
    defaultValue: 'theme',
  },
  system_colors: {
    table: { disable: true },
  },
  theme_colors: {
    table: { disable: false },
  }, 
}

export const ThemeColorGrid = Template.bind({});
ThemeColorGrid.args = {
  items: ThemeColorList
}
