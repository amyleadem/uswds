import Component from "./usa-fonts.twig";
import Data from "./fonts.json";

export default {
  title: "Tokens/Fonts",
}

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = Data;
