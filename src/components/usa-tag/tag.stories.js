import Component from "./usa-tag.twig";
import {
  StyleDefault,
  StyleBig,
} from "./content";


export default {
  title: "Components/Tag",
  argTypes: {
    modifier: {
      control: { type: 'select' },
      options: [
        'usa-tag',
        'usa-tag usa-tag--big',
      ],
    }
  }
}

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = StyleDefault;

export const Big = Template.bind({});
Big.args = StyleBig;
