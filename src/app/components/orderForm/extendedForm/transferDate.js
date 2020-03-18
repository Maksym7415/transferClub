import React, { useState } from 'react';
import { KeyboardTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import useStyle from '../styles';

const TransferDate = (props) => {
  const classes = useStyle()();

  return (
    <Container>
      <Paper>
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
          value="start"
          control={<Checkbox value={props.checked} color="primary" />}
          label="Add return way"
          labelPlacement="start"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="return-date-picker-inline"
              label="Return transfer date"
              value={props.selectedDate}
              onChange={props.handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="return-time-picker"
              label="Return pick-up time"
              value={props.selectedDate}
              onChange={props.handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
        </MuiPickersUtilsProvider>
      </Paper>
      </Container>
  );
};

export default TransferDate;
