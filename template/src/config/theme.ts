import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const baseTheme = createMuiTheme({});
const theme = responsiveFontSizes(baseTheme);

export default theme;
