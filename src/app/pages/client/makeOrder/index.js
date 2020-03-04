import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import useStyles from '../styles';


const TabPanel = (props) => {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const a11yProps = (index) => ({
  id: `full-width-tab-${index}`,
  'aria-controls': `full-width-tabpanel-${index}`,
});

const MakeOrder = (props) => {
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
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <Grid className={classes.centerContainer} container spacing={3}>
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
            className={classes.tabPanelContainer}
            index={tabs}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel className={classes.tabPanel} value={tabs} index={0} >
              <Paper className={classes.paper}>
                <NavigationIcon />
                <Input fullWidth={true} value={from} onChange={handleFrom} disableUnderline={true} placeholder='From'/>
              </Paper>
              <Paper className={classes.paper}>
                <NavigationIcon />
                <Input fullWidth={true} value={to} onChange={handleTo} disableUnderline={true} placeholder='To'/>
              </Paper>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={tabs} index={1} >
              <Paper className={classes.paper}>
                <NavigationIcon />
                <Input fullWidth={true} value={from} onChange={handleFrom} disableUnderline={true} placeholder='From'/>
              </Paper>
              <Paper className={classes.paper}>
              <FormControl variant="filled" className={classes.formControl}>
                <NativeSelect
                  native='true'
                  className={classes.select}
                  variant='filled'
                  value={select}
                  onChange={handleChangeSelect}
                >
                  <option value=''>Duration</option>
                  <option value='1hour'>1hour</option>
                  <option value='2hours'>2hours</option>
                  <option value='3hours'>3hours</option>
                </NativeSelect>
              </FormControl>
              </Paper>
            </TabPanel>
          </SwipeableViews>
          <Button className={classes.getOffers} variant="contained" color="secondary">
              Get offers
            </Button>
        </Grid>
      </Container>
    </div>
  );
};

export default MakeOrder;
