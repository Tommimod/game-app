import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './app-header.css';

const AppHeader = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Подборщик игр | 3 курс, заоч.
      </Typography>
    </Toolbar>
  </AppBar>
);


export default AppHeader;
