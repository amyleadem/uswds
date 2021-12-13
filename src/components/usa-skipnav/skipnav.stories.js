import Component from "./usa-skipnav.twig";
import {
  FocusDefault,
  FocusActive,
  TestContent,
} from "./content";


export default {
  title: "Components/Skip Nav",
  argTypes: {
    focus: {
      control: { type: 'boolean' },
      defaultValue: 'false',
    },
    label: {
      control: { type: 'text' },
      defaultValue: "Skip to main content",
    },
  }
}

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = FocusDefault;

export const onFocus = Template.bind({});
onFocus.args = FocusActive;

export const ShowWithSampleContent = Template.bind({});
ShowWithSampleContent.args = TestContent;
