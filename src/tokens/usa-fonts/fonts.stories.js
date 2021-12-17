import Component from "./usa-fonts.twig";
import * as fontStyles from "./usa-fonts~typeface";

export default {
  title: "Tokens/Fonts",
  argTypes: {
    font_token_headline: {
      control: { type: 'select' },
      defaultValue: 'Merriweather Web',
      mapping: fontStyles.systemFontFamily,
      name: 'Headline - font family token',
      options: fontStyles.systemFontFamily,
      table: { disable: true },
    },
    font_style_headline: {
      control: { type: 'select' },
      defaultValue: 'normal',
      name: 'Headline - font style',
      options: fontStyles.systemFontStyle,
      table: { disable: true },
    },
    font_weight_headline: {
      control: { type: 'select' },
      defaultValue: '600',
      name: 'Headline - font style',
      options: fontStyles.systemFontWeight,
      table: { disable: true }
    },
    font_token_body: {
      control: { type: 'select' },
      defaultValue: 'Source Sans Pro Web',
      mapping: fontStyles.systemFontFamily,
      name: 'Body - font family token',
      options: fontStyles.systemFontFamily,
      table: { disable: true },
    },
    font_style_body: {
      control: { type: 'select' },
      defaultValue: 'normal',
      name: 'Body - font style',
      options: fontStyles.systemFontStyle,
      table: { disable: true },
    },
    font_weight_body: {
      control: { type: 'select' },
      defaultValue: '400',
      name: 'Body - font weight',
      options: fontStyles.systemFontWeight,
      table: { disable: true }
    },
    id: {
      name: 'Theme font family',
      defaultValue: "sans",
      table: { disable: true },
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
    defaultValue: fontStyles.TypeMono,
  },
  font_token_body: {
    defaultValue: fontStyles.TypeMono,
  },
  id: {
    defaultValue: "mono",
    table: { disable: false },
  },
}

export const SystemSansSerif = Template.bind({});
SystemSansSerif.argTypes = {
  font_token_headline: {
    defaultValue: fontStyles.TypeSans,
  },
  font_token_body: {
    defaultValue: fontStyles.TypeSans,
  },
  id: {
    defaultValue: "sans",
    table: { disable: false },
  },
}

export const SystemSerif = Template.bind({});
SystemSerif.argTypes = {
  font_token_headline: {
    defaultValue: fontStyles.TypeSerif,
  },
  font_token_body: {
    defaultValue: fontStyles.TypeSerif,
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