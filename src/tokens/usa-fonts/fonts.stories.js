import Component from "./usa-fonts.twig";
import * as fontVars from "./usa-fonts~vars";

export default {
  title: "Tokens/Fonts",
  argTypes: {
    font_token_headline: {
      name: 'Headline - font family token',

      control: { type: 'select' },
      defaultValue: 'Merriweather Web',
      options: fontVars.systemFontFamily,
      table: { disable: true },
    },
    font_style_headline: {
      control: { type: 'select' },
      defaultValue: 'normal',
      name: 'Headline - font style',
      options: fontVars.systemFontStyle,
      table: { disable: true },
    },
    font_weight_headline: {
      control: { type: 'select' },
      defaultValue: '600',
      name: 'Headline - font weight',
      options: fontVars.systemFontWeight,
      table: { disable: true }
    },
    font_token_body: {
      control: { type: 'select' },
      defaultValue: 'Source Sans Pro Web',
      mapping: fontVars.systemFontFamily,
      name: 'Body - font family token',
      options: fontVars.systemFontFamily,
      table: { disable: true },
    },
    font_style_body: {
      control: { type: 'select' },
      defaultValue: 'normal',
      name: 'Body - font style',
      options: fontVars.systemFontStyle,
      table: { disable: true },
    },
    font_weight_body: {
      control: { type: 'select' },
      defaultValue: '400',
      name: 'Body - font weight',
      options: fontVars.systemFontWeight,
      table: { disable: true }
    },
    text_width: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
      defaultValue: 3,
      name: 'Text width increments',
      table: { disable: true },
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
    defaultValue: fontVars.TypeMono,
  },
  font_token_body: {
    defaultValue: fontVars.TypeMono,
  },
  id: {
    defaultValue: "mono",
  },
}

export const ThemeSansSerif = Template.bind({});
ThemeSansSerif.argTypes = {
  font_token_headline: {
    defaultValue: fontVars.TypeSans,
  },
  font_token_body: {
    defaultValue: fontVars.TypeSans,
  },
  id: {
    defaultValue: "sans",
  },
}

export const ThemeSerif = Template.bind({});
ThemeSerif.argTypes = {
  font_token_headline: {
    defaultValue: fontVars.TypeSerif,
  },
  font_token_body: {
    defaultValue: fontVars.TypeSerif,
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
  typescale_h1: {
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
  text_width: {
    table: { disable: false },
  },
}