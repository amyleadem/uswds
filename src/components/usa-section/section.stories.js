import Component from "./usa-section.twig";

import {
  StyleDefault,
  StyleDark,
  StyleLight,
} from "./content";


export default {
  title: "Tokens/Section",
  argTypes: {
    modifier: {
      options: [
        'usa-section', 
        'usa-section--dark', 
        'usa-section--light', 
      ],
      control: { type: 'select' },
    }
  }
}

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = StyleDefault;

export const Dark = Template.bind({});
Dark.args = StyleDark;

export const Light = Template.bind({});
Light.args = StyleLight;