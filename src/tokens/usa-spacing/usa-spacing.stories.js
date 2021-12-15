import Component from "./usa-spacing.twig";

export default {
  title: "Tokens/Spacing",
  argTypes: {
    grid_gap: {
      control: { type: 'select' },
      defaultValue: 'grid-gap-md',
      name: 'Theme grid gap modifiers',
      options: [
        'grid-gap-sm',
        'grid-gap-md',
        'grid-gap-lg',
      ],
    },
    margin_top: {
      control: { type: 'select' },
      defaultValue: 'margin-top-2',
      name: 'Top margin modifier',
      options: [
        'margin-top-1',
        'margin-top-2',
        'margin-top-3',
        'margin-top-4',
        'margin-top-5',
        'margin-top-6',
      ],
    },
    column_count: {
      control: { type: 'range', min: 1, max: 12, step: 1 },
      name: 'Column count',
    },
    row_count: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
      name: 'Column count',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => Component(args);

export const Default = Template.bind({});
