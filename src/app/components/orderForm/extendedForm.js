import React, { useState } from 'react';
import { KeyboardTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import useStyle from './styles';


const ExtendedForm = (prors) => {
  const classes = useStyle()();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [checked, setChecked] = useState({});

  const handleChange = (event) => {
    const item = event.target.name;
    setChecked((prev) => ({ ...prev, [item]: event.target.checked }));
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div>
      <Paper>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
        </MuiPickersUtilsProvider>
      </Paper>
      <div>
        <Paper>
          <Checkbox
            name='econom'
            checked={checked.econom || false}
            onChange={handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Econom</span>
        </Paper>
        <Paper>
          <Checkbox
            name='standart'
            checked={checked.standart || false}
            onChange={handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Econom</span>
        </Paper>
        <Paper>
          <Checkbox
            name='buiseness'
            checked={checked.buiseness || false}
            onChange={handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Econom</span>
        </Paper>
        <Paper>
          <Checkbox
            name='Van'
            checked={checked.Van || false}
            onChange={handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Econom</span>
        </Paper>
        <Paper>
          <Checkbox
            name='bus'
            checked={checked.bus || false}
            onChange={handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Econom</span>
        </Paper>
        <Paper>
          <Checkbox
            name='comfort'
            checked={checked.somfort || false}
            onChange={handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Econom</span>
        </Paper>
      </div>
    </div>
  );
};

export default ExtendedForm;
