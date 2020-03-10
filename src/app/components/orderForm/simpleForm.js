import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import { TabPanel, a11yProps } from './tabPanel';
import useStyles from './styles';
import AutoComplete from '../map/autoComplete';

const SimpleForm = (props) => {
  const classes = useStyles()();
  const [from, setFrom] = useState('');
  const [select, setSelect] = useState('Duration');
  const [to, setTo] = useState('');
  const [tabs, setTabs] = useState(0);

  const handleChangeTabs = (event, newValue) => setTabs(newValue);
  const handleChangeIndex = (index) => setTabs(index);
  const handleChangeSelect = (e) => setSelect(e.target.value);
  const handleFrom = (e) => setFrom(e.target.value);
  const handleTo = (e) => setTo(e.target.value);

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={tabs}
          onChange={handleChangeTabs}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Transfer" {...a11yProps(0)} />
          <Tab label="Per hour rent" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        className={`simpleOrderForm ${classes.tabPanelContainer}`}
        index={tabs}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className={classes.tabPanel} value={tabs} index={0} >
          <Paper className={classes.paper}>
            <NavigationIcon />
            <AutoComplete fullWidth={true} value={from} onChange={handleFrom} underline={true} placeholder='From' />
          </Paper>
          <Paper className={classes.paper}>
            <NavigationIcon />
            <AutoComplete fullWidth={true} value={to} onChange={handleTo} underline={true} placeholder='To' />
          </Paper>
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={tabs} index={1} >
          <Paper className={classes.paper}>
            <NavigationIcon />
            <AutoComplete fullWidth={true} value={from} onChange={handleFrom} underline={true} placeholder='From' />
          </Paper>
          <Paper className={classes.paper}>
            <FormControl variant="filled" className={classes.formControl}>
              <NativeSelect
                native='true'
                className={classes.select}
                variant='filled'
                value={select}
                onChange={handleChangeSelect}
                disableUnderline={true}
              >
                <option value='en'>Duration</option>
                <option value='1hour'>kjdfd</option>
                <option value='2hours'>2hours</option>
                <option value='3hours'>3hours</option>
              </NativeSelect>
            </FormControl>
          </Paper>
        </TabPanel>
      </SwipeableViews>
    </>
  );
};

export default SimpleForm;