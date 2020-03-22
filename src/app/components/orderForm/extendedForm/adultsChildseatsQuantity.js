import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Remove';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const AdultsChildren = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.adultsChildsContainer}>
      <Paper elevation={0} className={`adultsQuantity ${classes.adultsQuantity}`}>
        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Adults</span>
        <div className={classes.adultsButtons}>
          <Fab onClick={props.handleMinusAdultsQuantity} size='small' color="secondary">
              <RemoveIcon fontSize="small" />
          </Fab>
          <span>{props.adultsQuantity}</span>
          <Fab onClick={props.handlePlusAdultsQuantity} size='small' color="secondary">
              <AddIcon />
          </Fab>
        </div>
      </Paper>
      <Paper
        elevation={0}
        className={classes.childSeatsContainer}
      >
        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Child seats</span>
        <div className={classes.seatsListContainer}>
          <Paper className={classes.childSeatsHeader} elevation={0} onClick={props.handleOpenChildSeats}>
            <Typography>Type of child seat</Typography>
            {props.openChildSeats ? <ExpandLess /> : <ExpandMore />}
          </Paper>
          <Collapse in={props.openChildSeats} timeout={props.openChildSeats ? 700 : 700} unmountOnExit>
              <Paper elevation={0} className={`adultsQuantity ${classes.childSeatsQuantity}`}>
                <span>Infant carrier</span>
                <div>
                  <Fab
                    onClick={props.handleMinusInfantSeat}
                    size="small"
                    color="secondary"
                  >
                    <RemoveIcon fontSize="small" />
                  </Fab>
                  <span>{props.infantSeatsQuantity}</span>
                  <Fab
                    onClick={props.handlePlusInfantSeat}
                    size="small"
                    color="secondary"
                  >
                    <AddIcon />
                  </Fab>
                </div>
              </Paper>
              <Paper elevation={0} className={`adultsQuantity ${classes.childSeatsQuantity}`}>
                <span>Convertable seats</span>
                <div>
                  <Fab
                    onClick={props.handleMinusConvertableSeat}
                    size="small"
                    color="secondary"
                  >
                    <RemoveIcon fontSize="small" />
                  </Fab>
                  <span>{props.convertableQuantity}</span>
                  <Fab
                    onClick={props.handlePlusConvertableSeat}
                    size="small"
                    color="secondary"
                  >
                    <AddIcon />
                  </Fab>
                </div>
              </Paper>
              <Paper elevation={0} className={`adultsQuantity ${classes.childSeatsQuantity}`}>
                <span>Booster seats</span>
                <div>
                  <Fab
                    onClick={props.handleMinusBoosterSeats}
                    size="small"
                    color="secondary"
                  >
                    <RemoveIcon fontSize="small" />
                  </Fab>
                  <span>{props.boosterQuantity}</span>
                  <Fab
                    onClick={props.handlePlusBoosterSeats}
                    size="small"
                    color="secondary"
                  >
                    <AddIcon />
                  </Fab>
                </div>
              </Paper>
        </Collapse>
      </div>
    </Paper>
    </Container>
  );
};

export default AdultsChildren;
