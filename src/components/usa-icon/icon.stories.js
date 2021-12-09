import Component from "./usa-icon.twig";
import Data from "./usa-icon.json";

export default {
  title: "Tokens/Icon",
}

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = Data;