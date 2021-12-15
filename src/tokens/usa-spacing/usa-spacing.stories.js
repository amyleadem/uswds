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
    item_count: {
      control: { type: 'range', min: 1, max: 12, step: 1 },
      name: 'Column count',
    }
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => Component(args);

export const ColumnGap = Template.bind({});
