import Component from "./usa-fonts.twig";
import typeStyles from "../../stylesheets/_export.module.scss";
import FontWeightList from "./usa-fonts~weights";

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
      control: { type: 'select' },
      defaultValue: '600',
      mapping: FontWeightList,
      options: FontWeightList,
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

export const SystemMono = Template.bind({});
SystemMono.argTypes = {
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

export const SystemSansSerif = Template.bind({});
SystemSansSerif.argTypes = {
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

export const SystemSerif = Template.bind({});
SystemSerif.argTypes = {
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