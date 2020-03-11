import React, { useState } from 'react';
import { KeyboardTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grow from '@material-ui/core/Grow';
import useStyle from './styles';
import AdditionalOptions from './additionalOptions';
import Comment from './comment';
import Contacts from './contacts';


const ExtendedForm = (prors) => {
  const classes = useStyle()();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [checked, setChecked] = useState({});
  const [adultsQuantity, setQuantity] = useState(2);
  const [openChildSeats, setOpenChildSeats] = useState(false);

  const handleChange = (event) => {
    const item = event.target.name;
    setChecked((prev) => ({ ...prev, [item]: event.target.checked }));
  };
  const handleDateChange = (date) => setSelectedDate(date);
  const handlePlusQuantity = () => setQuantity((prev) => (prev < 4 ? prev + 1 : 4));
  const handleMinusQuantity = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  const handleOpenChildSeats = () => setOpenChildSeats(!openChildSeats);

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
              label="Transfer date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Pick-up time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
        </MuiPickersUtilsProvider>
      </Paper>
      <Paper className={classes.returnWayContainer}>
        <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
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
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="return-time-picker"
              label="Return pick-up time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
        </MuiPickersUtilsProvider>
      </Paper>
      <div className={classes.carsContainer}>
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
      <Paper className={`adultsQuantity ${classes.adultsQuantity}`}>
        <span>Adults</span>
        <div>
          <Fab onClick={handleMinusQuantity} size='small' color="secondary">
              <RemoveIcon fontSize="small" />
          </Fab>
          <span>{adultsQuantity}</span>
          <Fab onClick={handlePlusQuantity} size='small' color="secondary">
              <AddIcon />
          </Fab>
        </div>
      </Paper>
      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Child seats
        </ListSubheader>
      }
      className={classes.childSeatsContainer}
    >
      <ListItem button onClick={handleOpenChildSeats}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {openChildSeats ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openChildSeats} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.childSeatsItem}>
            <Paper className={`adultsQuantity ${classes.childSeatsQuantity}`}>
              <span>Infant carrier</span>
              <div>
                <Fab
                  onClick={handleMinusQuantity}
                  size="small"
                  color="secondary"
                >
                  <RemoveIcon fontSize="small" />
                </Fab>
                <span>{adultsQuantity}</span>
                <Fab
                  onClick={handlePlusQuantity}
                  size="small"
                  color="secondary"
                >
                  <AddIcon />
                </Fab>
              </div>
            </Paper>
            <Paper className={`adultsQuantity ${classes.childSeatsQuantity}`}>
              <span>Convertable seats</span>
              <div>
                <Fab
                  onClick={handleMinusQuantity}
                  size="small"
                  color="secondary"
                >
                  <RemoveIcon fontSize="small" />
                </Fab>
                <span>{adultsQuantity}</span>
                <Fab
                  onClick={handlePlusQuantity}
                  size="small"
                  color="secondary"
                >
                  <AddIcon />
                </Fab>
              </div>
            </Paper>
            <Paper className={`adultsQuantity ${classes.childSeatsQuantity}`}>
              <span>Booster seats</span>
              <div>
                <Fab
                  onClick={handleMinusQuantity}
                  size="small"
                  color="secondary"
                >
                  <RemoveIcon fontSize="small" />
                </Fab>
                <span>{adultsQuantity}</span>
                <Fab
                  onClick={handlePlusQuantity}
                  size="small"
                  color="secondary"
                >
                  <AddIcon />
                </Fab>
              </div>
            </Paper>
          </ListItem>
        </List>
      </Collapse>
    </List>
    <AdditionalOptions />
    <Comment />
    <Contacts />
    </div>
  );
};

export default ExtendedForm;
