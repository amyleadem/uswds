import Component from "./usa-fonts.twig";
import * as vars from "./usa-fonts~vars";

console.log(vars.systemTypeScale);
console.log(vars.systemTypefaces);

export default {
  title: "Tokens/Fonts",
  argTypes: {
    font_family_headline: {
      name: 'Headline - font family token',
      control: { type: 'select' },
      defaultValue: 'Merriweather',
      options: vars.systemTypefaces,
      table: { disable: true },
    },
    font_style_headline: {
      control: { type: 'select' },
      defaultValue: 'normal',
      name: 'Headline - font style',
      options: vars.systemFontStyle,
      table: { disable: true },
    },
    font_weight_headline: {
      control: { type: 'select' },
      defaultValue: '600',
      name: 'Headline - font weight',
      options: vars.systemFontWeight,
      table: { disable: true }
    },
    font_family_body: {
      control: { type: 'select' },
      defaultValue: 'Source Sans Pro',
      mapping: vars.themeFontsList,
      name: 'Body - font family token',
      options: vars.systemTypefaces,
      table: { disable: true },
    },
    font_style_body: {
      control: { type: 'select' },
      defaultValue: 'normal',
      name: 'Body - font style',
      options: vars.systemFontStyle,
      table: { disable: true },
    },
    font_weight_body: {
      control: { type: 'select' },
      defaultValue: '400',
      name: 'Body - font weight',
      options: vars.systemFontWeight,
      table: { disable: true }
    },
    font_scale_body: {
        control: { type: 'select' },
        defaultValue: '10',
        name: 'Body - type scale',
        options: vars.systemTypeScale,
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
  font_family_headline: {
    defaultValue: vars.themeFontMono,
  },
  font_family_body: {
    defaultValue: vars.themeFontMono,
  },
  id: {
    defaultValue: "mono",
  },
}

export const ThemeSansSerif = Template.bind({});
ThemeSansSerif.argTypes = {
  font_family_headline: {
    defaultValue: vars.themeFontSans,
  },
  font_family_body: {
    defaultValue: vars.themeFontSans,
  },
  id: {
    defaultValue: "sans",
  },
}

export const ThemeSerif = Template.bind({});
ThemeSerif.argTypes = {
  font_family_headline: {
    defaultValue: vars.themeFontSerif,
  },
  font_family_body: {
    defaultValue: vars.themeFontSerif,
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
  font_family_headline: {
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
  font_family_body: {
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