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
import { withRouter } from 'react-router';
import { Autocomplete } from '@react-google-maps/api';
import { TabPanel, a11yProps } from '../tabPanel';
import { useStyles } from './styles';
import langData from './langData';

const SimpleForm = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.history.location.pathname.split('/')[1]);
  const [tabs, setTabs] = useState(0);

  const handleChangeTabs = (event, newValue) => setTabs(newValue);
  const handleChangeIndex = (index) => setTabs(index);

  useEffect(() => {
    setLang(props.history.location.pathname.split('/')[1]);
  }, [props.history.location]);

  return (
    <>
      <AppBar position='static' color='default'>
        <Tabs
          value={tabs}
          onChange={handleChangeTabs}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label={langData.route[lang]} {...a11yProps(0)} />
          <Tab label={langData.perHourRent[lang]} {...a11yProps(1)} />
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
            <Autocomplete
              onLoad={props.handleOnLoadAutocompliteFrom}
              onPlaceChanged={props.handlePlaceChangedFrom}
              fullWidth={true}
              class={classes.autocomplete}
            >
              <Input fullWidth={true} value={props.from} onChange={props.handleFrom} disableUnderline={true} placeholder={langData.from[lang]}/>
            </Autocomplete>
          </Paper>
          <Paper className={classes.paper}>
            <NavigationIcon />
            <Autocomplete
              onLoad={props.handleOnLoadAutocompliteTo}
              onPlaceChanged={props.handlePlaceChangedTo}
              fullWidth={true}
            >
              <Input fullWidth={true} value={props.to} onChange={props.handleTo} disableUnderline={true} placeholder={langData.to[lang]}/>
            </Autocomplete>
          </Paper>
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={tabs} index={1} >
          <Paper className={classes.paper}>
            <NavigationIcon />
            <Autocomplete
              onLoad={props.handleOnLoadAutocompliteFrom}
              onPlaceChanged={props.handlePlaceChangedFrom}
            >
              <Input fullWidth={true} value={props.from} onChange={props.handleFrom} disableUnderline={true} placeholder={langData.from[lang]}/>
            </Autocomplete>
          </Paper>
          <Paper className={classes.paper}>
            <FormControl variant='filled' className={classes.formControl}>
              <NativeSelect
                native='true'
                className={classes.select}
                variant='filled'
                value={props.select}
                onChange={props.handleChangeSelect}
                disableUnderline={true}
              >
                <option value='en'>{langData.duration[lang]}</option>
                <option value='1hour'>1{langData.hour[lang]}</option>
                <option value='2hours'>2{langData.hours[lang]}</option>
                <option value='3hours'>3{langData.hours[lang]}</option>
              </NativeSelect>
            </FormControl>
          </Paper>
        </TabPanel>
      </SwipeableViews>
    </>
  );
};

export default withRouter(SimpleForm);
