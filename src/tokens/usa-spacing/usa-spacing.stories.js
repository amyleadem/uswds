import Component from "./usa-spacing.twig";

export default {
  title: "Tokens/Spacing",
  argTypes: {
    grid_gap: {
      control: { type: 'select' },
      defaultValue: 'grid-gap-md',
      name: 'Theme grid gap modifiers',
      options: [
        '[null]',
        'grid-gap-sm',
        'grid-gap-md',
        'grid-gap-lg',
        'grid-gap-0',
        'grid-gap-2px',
        'grid-gap-05',
        'grid-gap-1',
        'grid-gap-2',
        'grid-gap-3',
        'grid-gap-4',
        'grid-gap-5',
        'grid-gap-6',
      ],
    },
    margin_top: {
      control: { type: 'select' },
      defaultValue: 'margin-top-2',
      name: 'Top margin modifier',
      options: [
        '[null]',
        'margin-top-1',
        'margin-top-2',
        'margin-top-3',
        'margin-top-4',
        'margin-top-5',
        'margin-top-6',
      ],
    },
    height: {
      control: { type: 'select' },
      defaultValue: 'height-6',
      name: 'Height modifier',
      options: [
        'height-auto',
        'height-full',
        'height-viewport',
        'height-0',
        'height-1px',
        'height-2px',
        'height-05',
        'height-1',
        'height-105',
        'height-2',
        'height-205',
        'height-3',
        'height-4',
        'height-5',
        'height-6',
        'height-7',
        'height-8',
        'height-9',
        'height-10',
        'height-15',
      ],
    },
    column_count: {
      control: { type: 'range', min: 1, max: 12, step: 1 },
      name: 'Column count',
    },
    row_count: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
      name: 'Row count',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => Component(args);

export const Default = Template.bind({});
