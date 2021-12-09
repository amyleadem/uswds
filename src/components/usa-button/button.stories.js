import Component from "./usa-button.twig";
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
  title: "Tokens/Button",
  argTypes: {
    modifier: {
      options: [
        'usa-button', 
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
      control: { type: 'boolean' },
      defaultValue: true,
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
    control: { type: 'boolean' },
    defaultValue: 'true',
    table: { disable: true }
  },
  modifier: { table: { disable: true } },
  display_element_states: { table: { disable: true } },
  text: {
    control: { type: 'text' },
    defaultValue: 'Default text',
  },
  background_color: {
    control: { type: 'color' },
    defaultValue: "#005ea2",
  },
  background_color_hover: {
    control: { type: 'color' },
    defaultValue: "#1a4480",
  },
  background_color_active: {
    control: { type: 'color' },
    defaultValue: "#162e51",
  },
  background_color_disabled: {
    control: { type: 'color' },
    defaultValue: "#c9c9c9",
  },
  text_color: {
    control: { type: 'color' },
  },
  text_color_hover: {
    control: { type: 'color' },
  },
  text_color_unstyled: {
    control: { type: 'color' },
    defaultValue: "#005ea2",
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