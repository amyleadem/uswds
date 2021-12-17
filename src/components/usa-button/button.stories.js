import Component from "./usa-button.twig";
import SystemColorList from '../../tokens/usa-colors/usa-colors~vars';

import {
  StyleAccentCool,
  StyleAccentWarm,
  StyleBase,
  StyleBig,
  StyleDefault,
  StyleOutline,
  StyleOutlineInverse,
  StyleSecondary,
  StyleUnstyled,
} from "./content";

export default {
  title: "Components/Button",
  argTypes: {
    text: {
      defaultValue: 'Default',
      name: 'Custom button text',
    },
    modifier: {
      name: 'Class modifier',
      options: [
        ' ', 
        'usa-button--accent-cool', 
        'usa-button--accent-warm', 
        'usa-button--base',
        'usa-button--big',
        'usa-button--outline',
        'usa-button--outline usa-button--inverse',
        'usa-button--secondary',
        'usa-button--unstyled',
      ],
      control: { type: 'select' },
    },
    display_element_states: {
      name: 'Display all button states',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    playground_mode: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: { disable: true }
    },
  },
};

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = StyleDefault;

export const AccentCool = Template.bind({});
AccentCool.args = StyleAccentCool;

export const AccentWarm = Template.bind({});
AccentWarm.args = StyleAccentWarm;

export const Base = Template.bind({});
Base.args = StyleBase;

export const Big = Template.bind({});
Big.args = StyleBig;

export const Outline = Template.bind({});
Outline.args = StyleOutline;

export const OutlineInverse = Template.bind({});
OutlineInverse.args = StyleOutlineInverse;

export const Secondary = Template.bind({});
Secondary.args = StyleSecondary;

export const Unstyled = Template.bind({});
Unstyled.args = StyleUnstyled;

export const StylePlayground = Template.bind({});
StylePlayground.argTypes = {
  playground_mode: { 
    defaultValue: true,
  },
  modifier: { 
    table: { disable: true },
  },
  display_element_states: { 
    table: { disable: true },
  },
  background_color_family: {
    table: { disable: true }
  },
  text_color: {
    control: { type: 'select' }, 
    defaultValue: 'white',
    mapping: SystemColorList,
    name: 'Default state: text color',
    options: SystemColorList,
  },
  background_color_hover: {
    control: { type: 'select' },
    defaultValue: 'blue-warm-70',
    mapping: SystemColorList,
    name: 'Hover state: background color',
    options: SystemColorList,
  },
  text_color_hover: {
    control: { type: 'select' },
    defaultValue: 'white',
    mapping: SystemColorList,
    name: 'Hover state: text color',
    options: SystemColorList,
  },
  background_color_active: {
    control: { type: 'select' },
    defaultValue: 'blue-warm-70',
    mapping: SystemColorList,
    name: 'Active state: background color',
    options: SystemColorList,
  },
  background_color_disabled: {
    control: { type: 'select' },
    defaultValue: 'blue-warm-70',
    mapping: SystemColorList,
    name: 'Disabled state: background color',
    options: SystemColorList,
  },
  
  text_color_unstyled: {
    control: { type: 'select' },
    defaultValue: 'blue-warm-70',
    mapping: SystemColorList,
    name: 'Color - Unstyled',
    options: SystemColorList,
  },
  font_size: {
    control: { type: 'text' },
    defaultValue: '1.06rem',
  },
  border_radius: {
    control: { type: 'text' },
    defaultValue: '.25rem',
  },
  border_width: {
    control: { type: 'text' },
    defaultValue: '0',
  },
  border_color: {
    control: { type: 'color' },
  },
  border_color_hover: {
    control: { type: 'color' },
  },
}