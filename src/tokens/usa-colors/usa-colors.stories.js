/* eslint-disable no-console */
import Component from "./usa-colors.twig";
import SystemColorList from './usa-colors~system';

export default {
  title: "Tokens/Colors",
  argTypes: {
    system_colors: {
      control: { type: 'select' },
      mapping: SystemColorList,
      name: 'System Color Tokens',
      options: SystemColorList,
    },
    token_type: {
      control: { type: 'text' },
      defaultValue: 'System',
      table: { disable: true },
    },
    color_grid: {
      control: {type: 'boolean'},
      defaultValue: true,
    }
  },
  parameters: {
    layout: 'fullscreen',
  },
};


const Template = (args) => Component(args);

export const Default = Template.bind({});

export const SystemColorTokens = Template.bind({});
SystemColorTokens.argTypes = {
  color_grid: {
    defaultValue: false,
  }
}
