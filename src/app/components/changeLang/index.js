import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter } from 'react-router';
import history from '../../routing/history';
import langData from './langData';

const LangMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [lang, setLang] = useState('ru');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    setLang(lang);
    const ln = history.location.pathname.split('/');
    ln[1] = lang;
    history.push(ln.join('/'));
    setAnchorEl(null);
  };

  return (
    <div>
    {/* {console.log(history)} */}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {langData.changeLangButton[lang]}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose('ru')}>Russian</MenuItem>
        <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
      </Menu>
    </div>
  );
};

export default withRouter(LangMenu);
