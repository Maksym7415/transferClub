import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import langData from './langData';
import useStyles from './styles';

const LangMenu = (props) => {
  const [openLang, setOpenLang] = useState(false);
  const [lang, setLang] = useState(props.location.pathname.split('/')[1] || 'ru');
  const classes = useStyles()();

  const handleOpenLang = (event) => {
    setOpenLang(!openLang);
  };

  const handleLanguage = (lang) => {
    setLang(lang);
    const ln = props.location.pathname.split('/');
    ln[1] = lang;
    props.history.push(ln.join('/'));
    setOpenLang(!openLang);
  };

  return (
    <div>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.langMenuIcon}
    >
      <ListItem button onClick={handleOpenLang}>
        <img className={classes.langIcon} alt='languageIcon' src={langData.iconPath[lang]} />
        {openLang ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openLang} timeout="auto" unmountOnExit>
          <Paper className={classes.langMenu}>
            <Paper elevation={0} onClick={() => handleLanguage('ru')} className={classes.langMenuItem}>
              <img className={classes.langIcon} alt='languageIcon' src={langData.iconPath.ru} />
              <p>Russian</p>
            </Paper>
            <Paper elevation={0} onClick={() => handleLanguage('en')} className={classes.langMenuItem}>
              <img className={classes.langIcon} alt='languageIcon' src={langData.iconPath.en} />
              <p>English</p>
            </Paper>
          </Paper>
      </Collapse>
    </List>
    </div>
  );
};

export default withRouter(LangMenu);
