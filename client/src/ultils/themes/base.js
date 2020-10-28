import {lightTheme} from './light';
import {darkTheme} from './dark';
import {goldenTheme} from './golden'

export default function getThemeByName(theme){
    return themeMap[theme];
}
const themeMap={
    lightTheme,
    darkTheme,
    goldenTheme
}