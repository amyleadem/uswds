import Component from "./usa-fonts.twig";
import {
  StyleSans,
  StyleSerif
} from "./content";

export default {
  title: "Tokens/Fonts",
  argTypes: {
    font_name: {
      control: { type: 'text' },
      defaultValue: "Merriweather",
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    }
  },
}

const Template = (args) => Component(args);

export const SansSerif = Template.bind({});
SansSerif.args = StyleSans;

export const Serif = Template.bind({});
Serif.args = StyleSerif;
