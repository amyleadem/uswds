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
      table: { disable: true },
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
        control: { type: 'boolean' },
        defaultValue: true,
        table: { disable: true },
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
        control: { type: 'select' },
        defaultValue: '14',
        mapping: vars.systemTypeScale,
        name: 'h1 - type scale',
        options: vars.systemTypeScale,
    },
    typescale_h2: {
        control: { type: 'select' },
        defaultValue: '12',
        mapping: vars.systemTypeScale,
        name: 'h2 - type scale',
        options: vars.systemTypeScale,
    },
    typescale_h3: {
        control: { type: 'select' },
        defaultValue: '9',
        mapping: vars.systemTypeScale,
        name: 'h3 - type scale',
        options: vars.systemTypeScale,
    },
    typescale_h4: {
        control: { type: 'select' },
        defaultValue: '5',
        mapping: vars.systemTypeScale,
        name: 'h4 - type scale',
        options: vars.systemTypeScale,
    },
    typescale_h5: {
        control: { type: 'select' },
        defaultValue: '4',
        mapping: vars.systemTypeScale,
        name: 'h5 - type scale',
        options: vars.systemTypeScale,
    },
    typescale_h6: {
        control: { type: 'select' },
        defaultValue: '2',
        mapping: vars.systemTypeScale,
        name: 'h6 - type scale',
        options: vars.systemTypeScale,
    },
    typescale_lead: {
        control: { type: 'select' },
        defaultValue: '9',
        mapping: vars.systemTypeScale,
        name: 'Lead - type scale',
        options: vars.systemTypeScale,
    },
    typescale_body: {
        control: { type: 'select' },
        defaultValue: '5',
        mapping: vars.systemTypeScale,
        name: 'Body - type scale',
        options: vars.systemTypeScale,
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