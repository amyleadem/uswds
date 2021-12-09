import Component from "./usa-icon.twig";
import ComponentSizes from "./usa-icon--sizes.twig";
import Data from "./usa-icon.json";

export default {
  title: "Tokens/Icons",
  argTypes: {
    img_path: {
      table: { disable: true }
    },
    icons: {
      table: { disable: true },
    }
  }
}

const Template = (args) => Component(args);

export const IconList = Template.bind({});
IconList.args = Data;

const TemplateSizes = (args) => ComponentSizes(args);

export const IconSizes= TemplateSizes.bind({});
IconSizes.args = Data;
