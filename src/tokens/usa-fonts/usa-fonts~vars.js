import typeStyles from "../../stylesheets/_export.module.scss";

export const TypeMono = typeStyles.typeMono.replace(/["']/g, "");
export const TypeSerif = typeStyles.typeSerif.replace(/["']/g, "");
export const TypeSans = typeStyles.typeSans.replace(/["']/g, "");

export const systemFontFamily = {
    'georgia': 'Georgia',
    'helvetica': 'Helvetica Neue',
    'merriweather': 'Merriweather Web',
    //'open-sans': 'Open Sans',
    //'public-sans': 'Public Sans Web',
    'roboto-mono': 'Roboto Mono Web',
    'source-sans-pro': 'Source Sans Pro Web',
    'system': 'null',
    'tahoma': 'Tahoma',
    'verdana': 'Verdana',
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

