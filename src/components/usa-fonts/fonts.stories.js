import Component from "./usa-fonts.twig";
import fontStyles from "../../stylesheets/theme/_export.module.scss";

const TypeMono = fontStyles.typeMono.replace(/["']/g, "");
const TypeSerif = fontStyles.typeSerif.replace(/["']/g, "");
const TypeSans = fontStyles.typeSans.replace(/["']/g, "");

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
      defaultValue: TypeSans,
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
      defaultValue: 'normal',
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
    description: {
      control: { type: 'text' },
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt varius purus eget feugiat. Pellentesque ultricies mauris eget leo gravida, a viverra ante facilisis. Donec ac varius justo. Sed malesuada faucibus dui, eget euismod ante dictum sit amet. Integer quis congue lacus. Proin et egestas nibh. Nulla efficitur molestie bibendum. Aenean at diam sit amet risus facilisis molestie quis eget metus. Morbi sit amet bibendum lacus. Quisque congue pulvinar tempor. Ut molestie mi nec massa ullamcorper semper.'
    }
  },
} 

const Template = (args) => Component(args);

export const Mono = Template.bind({});
Mono.argTypes = {
  font_token: {
    defaultValue: TypeMono,
  },
  id: {
    defaultValue: "mono",
    table: { disable: false },
  },
}

export const SansSerif = Template.bind({});
SansSerif.argTypes = {
  font_token: {
    defaultValue: TypeSans,
  },
  id: {
    defaultValue: "sans",
    table: { disable: false },
  },
}

export const Serif = Template.bind({});
Serif.argTypes = {
  font_token: {
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
  font_token: {
    table: { disable: false },
  },
  font_style: {
    table: { disable: false }
  },
  font_weight: {
    table: { disable: false }
  },
}