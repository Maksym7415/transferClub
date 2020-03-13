import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';
import LangMenu from '../../components/changeLang';
import PublicDrawer from './publicDrawer/index.js';

const Header = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(!true);
  };
  const handleDrawerClose = () => {
    setOpen(!false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="absolute" className={clsx(classes.appBar, !open && classes.appBarShift)} >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, !open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Transfer Club
            </Typography>
            <LangMenu />
          </Toolbar>
        </AppBar>
        <PublicDrawer open={open} handleDrawerClose={handleDrawerClose} />
    </div>
  );
};

export default withRouter(Header);
