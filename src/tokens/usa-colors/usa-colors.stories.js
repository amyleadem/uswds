/* eslint-disable no-console */
import Component from "./usa-colors.twig";
import * as data from '../../data/colors';

const Blue = data.Blue.props[0];
const BlueCool = data.BlueCool.props[0];
const BlueWarm = data.BlueWarm.props[0];
const Cyan = data.Cyan.props[0];
const Gray = data.Gray.props[0];
const GrayCool = data.GrayCool.props[0];
const GrayWarm = data.GrayWarm.props[0];
const Green = data.Green.props[0];
const GreenCool = data.GreenCool.props[0];
const GreenWarm = data.GreenWarm.props[0];
const Indigo= data.Indigo.props[0];
const IndigoCool = data.IndigoCool.props[0];
const IndigoWarm = data.IndigoWarm.props[0];
const Magenta = data.Magenta.props[0];
const Mint = data.Mint.props[0];
const MintCool = data.MintCool.props[0];
const Orange = data.Orange.props[0];
const OrangeWarm = data.OrangeWarm.props[0];
const Red= data.Red.props[0];
const RedCool = data.RedCool.props[0];
const RedWarm = data.RedWarm.props[0];
const Violet = data.Violet.props[0];
const VioletWarm = data.VioletWarm.props[0];
const Yellow = data.Yellow.props[0];

const arrFamily = [
  Blue,
  BlueCool,
  BlueWarm,
  Cyan, 
  Gray,
  GrayCool,
  GrayWarm,
  Green,
  GreenCool,
  GreenWarm,
  Indigo,
  IndigoCool,
  IndigoWarm,
  Magenta,
  Mint,
  MintCool,
  Orange,
  OrangeWarm,
  Red,
  RedCool,
  RedWarm,
  Violet,
  VioletWarm,
  Yellow,
];

const colorList = {};

arrFamily.forEach(family => {
  const colorFamily = family.name;
  console.log(colorFamily);

  for (let i = 0; i < 10; i += 1) {
    // loop through each value entry to grab color grade and hex value
    const colorValues = family.value[i];
  
    // Color name =  color family - color grade
    const colorName = `${family.name}-${colorValues.name}`;
  
    // collect the hex value of the entry
    const colorHex = colorValues.value;
  
    // print item and hex value to colorList
    colorList[colorName] = colorHex;
  };
});

console.log(colorList);

export default {
  title: "Tokens/Colors",
  argTypes: {
    color_tokens: {
      name: 'USWDS Color Tokens',
      options: colorList,
      mapping: colorList,
      control: { type: 'select' },
    },
  },
};


const Template = (args) => Component(args);

export const Default = Template.bind({});
