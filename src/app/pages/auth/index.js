import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SignIn from './login';
import SignUp from './register';
import { TabPanel, allyProps } from '../../components/orderForm/tabPanel';
import { useStyles } from './styles';


const Authorization = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.container}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <SignIn onClick={() => handleChangeIndex(1)} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <SignUp onClick={() => handleChangeIndex(0)} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default Authorization;
