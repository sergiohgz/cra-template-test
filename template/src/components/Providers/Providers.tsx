import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import React, { FC } from 'react';

import theme from '../../config/theme';

const Providers: FC = ({ children }) => (
    <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </EmotionThemeProvider>
);

export default Providers;
