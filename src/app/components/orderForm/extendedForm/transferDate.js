import React, { useState } from 'react';
import { KeyboardTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

const TransferDate = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.transferDateContainer}>
      <Paper className={classes.dataPickerContainer}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Transfer date"
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
            label="Pick-up time"
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
              label='Add return way'
              labelPlacement="start"
        />
        <Paper className={classes.dataPickerContainer}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={classes.dataPickerItem}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="return-date-picker-inline"
                label="Return transfer date"
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
                label="Return pick-up time"
                value={props.backwardsSelectedDate}
                onChange={props.backwardsHandleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
          </MuiPickersUtilsProvider>
        </Paper>
      </Paper>
      </Container>
  );
};

export default TransferDate;
