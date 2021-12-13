import Component from "./usa-icon-list.twig";
import {
  ContentDefault,
  ContentCustomSize,
  ContentCustomSizeRich,
  ContentRich,
  ContentSimple,

} from "./content";

export default {
  title: "Dev/Icon List",
  argTypes: {
    img_path: {
      defaultValue:"../img",
      table: { disable: true }
    },
    items: {
      table: { disable: true },
    }
  }
}

const Template = (args) => Component(args);

export const Default= Template.bind({});
Default.args = ContentDefault;

export const CustomSize= Template.bind({});
CustomSize.args = ContentCustomSize;

export const CustomSizeWithRichText= Template.bind({});
CustomSizeWithRichText.args = ContentCustomSizeRich;

export const RichText= Template.bind({});
RichText.args = ContentRich;

export const CustomSizeSimple = Template.bind({});
CustomSizeSimple.args = ContentSimple;