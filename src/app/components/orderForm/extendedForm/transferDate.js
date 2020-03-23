import React, { useState } from 'react';
import { KeyboardTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import Collapse from '@material-ui/core/Collapse';
import { useStyles } from './styles';
import langData from './langData';

const TransferDate = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.transferDateContainer}>
      <Paper className={classes.dataPickerContainer}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            className={classes.dataPickerItem}
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label={langData.transferDate[props.lang]}
            value={props.selectedDate}
            onChange={props.handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            className={classes.dataPickerItem}
            margin="normal"
            id="time-picker"
            label={langData.pickUpTime[props.lang]}
            value={props.selectedDate}
            onChange={props.handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </MuiPickersUtilsProvider>
      </Paper>
      <Paper className={classes.returnWayContainer}>
        <FormControlLabel
              control={<Checkbox name='returnWay' onChange={props.handleChangeCheckbox} checked={props.checked || false} />}
              label= {<h3 style={{ fontSize: '16px' }}>{langData.returnWay[props.lang]}</h3>}
              labelPlacement="start"
        />
        <Collapse style={{ marginLeft: 'auto' }} in={props.openReturnWay} timeout={props.openReturnWay ? 700 : 700} unmountOnExit>
        <Paper className={classes.dataPickerContainer}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={classes.dataPickerItem}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="return-date-picker-inline"
                label={langData.returnDate[props.lang]}
                value={props.backwardsSelectedDate}
                onChange={props.backwardsHandleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                className={classes.dataPickerItem}
                margin="normal"
                id="return-time-picker"
                label={langData.returnTime[props.lang]}
                value={props.backwardsSelectedDate}
                onChange={props.backwardsHandleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
          </MuiPickersUtilsProvider>
        </Paper>
        </Collapse>
      </Paper>
      </Container>
  );
};

export default TransferDate;
