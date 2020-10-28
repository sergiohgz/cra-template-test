import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';

import theme from '../../config/theme';

const Providers: FC = ({ children }) => (
    <>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </>
);

export default Providers;
