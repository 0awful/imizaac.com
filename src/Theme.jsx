import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { deepPurple800, deepPurpleA400 } from 'material-ui/styles/colors';

let newTheme = lightBaseTheme;
newTheme.palette.primary1Color = deepPurple800;
newTheme.palette.primary2Color = deepPurpleA400;

const Theme = getMuiTheme(newTheme);

export default Theme;
