import system from "../../data/core-vars.json";
import theme from "../../data/theme-vars.json";

// System font vars
export const systemTypefaceList= system.systemTypefaceTokens[0];
export const systemTypefaces = [];

for (let t = 0; t <  systemTypefaceList.mapValue.length; t += 1) {
    const typefaceMap =  systemTypefaceList.mapValue[t];
    const typefaceName = typefaceMap.name.replaceAll("-"," ");
    systemTypefaces.push(typefaceName);
}

// Theme font vars
const themeFonts = theme.themeFontType;
export const themeFontsList = {}; 

for (let tf = 0; tf < themeFonts.length; tf += 1) {
    const item = themeFonts[tf];
    const itemValue = item.value;
    const itemName = item.name;
  
    if (itemName.includes("mono")) {  
        const mono = "Mono";
        themeFontsList[mono] = itemValue.replaceAll("-"," ");  
    } else if (itemName.includes("sans")) {  
        const sans = "Sans";
        themeFontsList[sans] = itemValue.replaceAll("-"," ");  
    }
    else if (itemName.includes("serif")) {  
        const serif = "Serif";
        const serifValue = itemValue.replaceAll("-"," ");
        themeFontsList[serif] = serifValue ;  
    }
}

export const themeFontMono = themeFontsList.Mono;
export const themeFontSans = themeFontsList.Sans;
export const themeFontSerif = themeFontsList.Serif;


export const systemFontStyle = [
    'normal',
    'italic',
]

export const systemFontWeight = [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
]

export const systemTypeScale = {
    "micro": "10px",
    "1": "12px",
    "2": "13px",
    "3": "14px",
    "4": "15px",
    "5": "16px",
    "6": "17px",
    "7": "18px",
    "8": "20px",
    "9": "22px",
    "10": "24px",
    "11": "28px",
    "12": "32px",
    "13": "36px",
    "14": "40px",
    "15": "48px",
    "16": "56px",
    "17": "64px",
    "18": "80px",
    "19": "120px",
    "20": "140px",
}


// const lineHeightList= vars.systemLineHeight[0];
// export const lineHeightListParsed = JSON.parse(lineHeightList);
// export const systemLineHeight = {};*/