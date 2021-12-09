import Component from "./usa-skipnav.twig";
import {
  FocusDefault,
  FocusActive,
  TestContent,
} from "./content";


export default {
  title: "Tokens/Skip Nav",
  argTypes: {
    focus: {
      control: { type: 'boolean' },
      defaultValue: 'false',
    },
    label: {
      control: { type: 'text' },
      defaultValue: "Skip to main content",
    },
    show_sample_content: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    sample_content: {
      control: {type: 'text'},
      defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi feugiat, iaculis leo vel, consequat tortor. Sed non pretium tellus. Morbi massa nibh, laoreet a tempus consectetur, molestie a arcu. Nullam augue lacus, volutpat sed ligula eget, tincidunt maximus ligula. Sed finibus metus dapibus facilisis feugiat. Aenean aliquam ullamcorper imperdiet. Ut luctus lacus vitae lacinia rutrum. Curabitur vel diam erat. Donec scelerisque ornare turpis, quis iaculis ante interdum in. Sed dolor dui, molestie sed condimentum quis, cursus vitae libero. Praesent ut metus at quam feugiat feugiat vitae eu massa. In eu leo at tortor scelerisque vulputate ac eget erat. Aenean interdum nibh lorem, eget facilisis augue aliquam vitae. Vestibulum imperdiet posuere risus eu sagittis. Suspendisse potenti."
    }
  }
}

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = FocusDefault;

export const onFocus = Template.bind({});
onFocus.args = FocusActive;

export const ShowSampleContent = Template.bind({});
ShowSampleContent.args = TestContent;