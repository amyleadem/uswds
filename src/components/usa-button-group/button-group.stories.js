import Component from "./usa-button-group.twig";
import {
  StyleDefault,
  StyleSegmented,
} from "./content";

export default {
  title: "Components/Button Group",
  argTypes: {
    modifier: {
      options: [
        'usa-button-group', 
        'usa-button-group--segmented'
      ],
      control: { type: 'select' },
    }
  }
};

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = StyleDefault;

export const Segmented = Template.bind({});
Segmented.args = StyleSegmented;
