import { connectableObservableDescriptor } from 'rxjs/observable/ConnectableObservable';
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

const SystemColorList = {};

arrFamily.forEach(family => {
  for (let i = 0; i < 11; i += 1) {
    // loop through each value entry to grab color grade and hex value
    const colorFamily = family.name;
    const colorValue = family.value[i];
    const colorGrade = colorValue.name;
    const vivid = "vivid";
    
    // Color name =  color family - color grade
    const tokenName = `${colorFamily}-${colorGrade}`;
  
    // collect the hex value of the entry
    const hex = colorValue.value;

    // print item and hex value to colorList
    SystemColorList[tokenName] =  hex;

    if(tokenName.indexOf(vivid) !== -1){
        console.log("is vivid");
    }
  };
});

export default SystemColorList;