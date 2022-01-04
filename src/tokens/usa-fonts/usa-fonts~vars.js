import typeStyles from "../../stylesheets/_export.module.scss";
import vars from "../../data/sass-vars.json";

export const TypeMono = typeStyles.fontTypeMono.replace(/["']/g, "");
export const TypeSerif = typeStyles.fontTypeSerif.replace(/["']/g, "");
export const TypeSans = typeStyles.fontTypeSans.replace(/["']/g, "");

export const systemFontFamily = {
    'georgia': 'Georgia',
    'helvetica': 'Helvetica Neue',
    'merriweather': 'Merriweather Web',
    // 'open-sans': 'Open Sans',
    // 'public-sans': 'Public Sans Web',
    'roboto-mono': 'Roboto Mono Web',
    'source-sans-pro': 'Source Sans Pro Web',
    'system': 'null',
    'tahoma': 'Tahoma',
    'verdana': 'Verdana',
}

export const typefaceList= vars.systemTypefaceTokens[0];
export const systemTypefaces = [];

for (let t = 0; t < typefaceList.mapValue.length; t += 1) {
    const typefaceMap = typefaceList.mapValue[t];
    const typefaceName = typefaceMap.name;
    systemTypefaces.push(typefaceName);
}

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


// const lineHeightList= vars.systemLineHeight[0];
// export const lineHeightListParsed = JSON.parse(lineHeightList);
// export const systemLineHeight = {};*/
