import Component from "./usa-fonts.twig";
import typeStyles from "../../stylesheets/_export.module.scss";

const TypeMono = typeStyles.typeMono.replace(/["']/g, "");
const TypeSerif = typeStyles.typeSerif.replace(/["']/g, "");
const TypeSans = typeStyles.typeSans.replace(/["']/g, "");

export default {
  title: "Tokens/Fonts",
  argTypes: {
    font_token_headline: {
      options: [
        'Georgia',
        'Helvetica Neue',
        'Merriweather Web',
        'Roboto Mono Web',
        'Source Sans Pro Web',
        'Tahoma',
        'Verdana',
      ],
      control: { type: 'select' },
      defaultValue: 'Merriweather Web',
      table: { disable: true },
    },
    font_style_headline: {
      options: [
        'normal',
        'italic',
      ],
      control: { type: 'select' },
      defaultValue: 'normal',
      table: { disable: true }
    },
    font_weight_headline: {
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
      defaultValue: '600',
      table: { disable: true }
    },
    font_token_body: {
      options: [
        'Georgia',
        'Helvetica Neue',
        'Merriweather Web',
        'Roboto Mono Web',
        'Source Sans Pro Web',
        'Tahoma',
        'Verdana',
      ],
      control: { type: 'select' },
      defaultValue: 'Source Sans Pro Web',
      table: { disable: true },
    },
    font_style_body: {
      options: [
        'normal',
        'italic',
      ],
      control: { type: 'select' },
      defaultValue: 'normal',
      table: { disable: true }
    },
    font_weight_body: {
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
    description: {
      control: { type: 'text' },
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt varius purus eget feugiat. Pellentesque ultricies mauris eget leo gravida, a viverra ante facilisis. Donec ac varius justo. Sed malesuada faucibus dui, eget euismod ante dictum sit amet. Integer quis congue lacus. Proin et egestas nibh. Nulla efficitur molestie bibendum. Aenean at diam sit amet risus facilisis molestie quis eget metus. Morbi sit amet bibendum lacus. Quisque congue pulvinar tempor. Ut molestie mi nec massa ullamcorper semper.'
    },
    id: {
      table: { disable: true },
      defaultValue: "sans",
    },
    playground_mode: {
      control: { type: 'boolean' },
      defaultValue: 'false',
      table: { disable: true },
    },
  },
} 

const Template = (args) => Component(args);

export const Mono = Template.bind({});
Mono.argTypes = {
  font_token_headline: {
    defaultValue: TypeMono,
  },
  font_token_body: {
    defaultValue: TypeMono,
  },
  id: {
    defaultValue: "mono",
    table: { disable: false },
  },
}

export const SansSerif = Template.bind({});
SansSerif.argTypes = {
  font_token_headline: {
    defaultValue: TypeSans,
  },
  font_token_body: {
    defaultValue: TypeSans,
  },
  id: {
    defaultValue: "sans",
    table: { disable: false },
  },
}

export const Serif = Template.bind({});
Serif.argTypes = {
  font_token_headline: {
    defaultValue: TypeSerif,
  },
  font_token_body: {
    defaultValue: TypeSerif,
  },
  id: {
    defaultValue: "serif",
    table: { disable: false },
  },
}

export const StylePlayground = Template.bind({});
StylePlayground.argTypes = {
  playground_mode: {
    defaultValue: 'true',
  },
  font_token_headline: {
    table: { disable: false },
  },
  font_style_headline: {
    table: { disable: false }
  },
  font_weight_headline: {
    table: { disable: false }
  },
  font_token_body: {
    table: { disable: false },
  },
  font_style_body: {
    table: { disable: false },
  },
  font_weight_body: {
    table: { disable: false },
  },
}