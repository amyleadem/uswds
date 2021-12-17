import Component from "./usa-fonts.twig";
import * as fontStyles from "./usa-fonts~vars";

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
      name: 'Headline - font weight',
      options: fontStyles.systemFontWeight,
      table: { disable: true }
    },
    typescale_h1: {
      control: { type: 'range', min: 1, max: 20, step: 1 },
      defaultValue: 14,
      name: 'H1 type scale',
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
      defaultValue: "sans",
      name: 'Theme font family',
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

export const ThemeMono = Template.bind({});
ThemeMono.argTypes = {
  font_token_headline: {
    defaultValue: fontStyles.TypeMono,
  },
  font_token_body: {
    defaultValue: fontStyles.TypeMono,
  },
  id: {
    defaultValue: "mono",
  },
}

export const ThemeSansSerif = Template.bind({});
ThemeSansSerif.argTypes = {
  font_token_headline: {
    defaultValue: fontStyles.TypeSans,
  },
  font_token_body: {
    defaultValue: fontStyles.TypeSans,
  },
  id: {
    defaultValue: "sans",
  },
}

export const ThemeSerif = Template.bind({});
ThemeSerif.argTypes = {
  font_token_headline: {
    defaultValue: fontStyles.TypeSerif,
  },
  font_token_body: {
    defaultValue: fontStyles.TypeSerif,
  },
  id: {
    defaultValue: "serif",
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