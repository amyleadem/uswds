import Component from "./usa-fonts.twig";
import {
  StyleSans,
  StyleSerif
} from "./content";

export default {
  title: "Tokens/Fonts",
  argTypes: {
    font_token: {
      options: [
        'Georgia',
        'Helvetica Neue',
        'Merriweather Web',
        'Public Sans Web',
        'Roboto Mono Web',
        'Source Sans Pro Web',
        'Tahoma',
        'Verdana',
      ],
      control: { type: 'select' },
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
    playground_mode: {
      control: { type: 'boolean' },
      defaultValue: 'false',
      table: { disable: true },
    },
    font_style: {
      options: [
        'normal',
        'italic',
      ],
      control: { type: 'select' },
      defaultValue: 'roman',
      table: { disable: true }
    },
    font_weight: {
      options: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
      ],
      control: { type: 'select' },
      defaultValue: '400',
      table: { disable: true }
    },
  },
} 

const Template = (args) => Component(args);

export const SansSerif = Template.bind({});
SansSerif.args = StyleSans;

export const Serif = Template.bind({});
Serif.args = StyleSerif;

export const StylePlayground = Template.bind({});
StylePlayground.argTypes = {
  playground_mode: {
    defaultValue: 'true',
  },
  font_token: {
    table: { disable: false },
    defaultValue: 'Source Sans Pro Web',
  },
  font_style: {
    table: { disable: false }
  },
  font_weight: {
    table: { disable: false }
  },
  description: {
    control: { type: 'text' },
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt varius purus eget feugiat. Pellentesque ultricies mauris eget leo gravida, a viverra ante facilisis. Donec ac varius justo. Sed malesuada faucibus dui, eget euismod ante dictum sit amet. Integer quis congue lacus. Proin et egestas nibh. Nulla efficitur molestie bibendum. Aenean at diam sit amet risus facilisis molestie quis eget metus. Morbi sit amet bibendum lacus. Quisque congue pulvinar tempor. Ut molestie mi nec massa ullamcorper semper.'
  }
}