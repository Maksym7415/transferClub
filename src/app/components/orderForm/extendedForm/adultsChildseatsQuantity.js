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
import { useStyles } from './styles';

const AdultsChildren = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <Paper className={`adultsQuantity ${classes.adultsQuantity}`}>
        <span>Adults</span>
        <div>
          <Fab onClick={props.handleMinusQuantity} size='small' color="secondary">
              <RemoveIcon fontSize="small" />
          </Fab>
          <span>{props.adultsQuantity}</span>
          <Fab onClick={props.handlePlusQuantity} size='small' color="secondary">
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
      <ListItem button onClick={props.handleOpenChildSeats}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {props.openChildSeats ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={props.openChildSeats} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.childSeatsItem}>
            <Paper className={`adultsQuantity ${classes.childSeatsQuantity}`}>
              <span>Infant carrier</span>
              <div>
                <Fab
                  onClick={props.handleMinusQuantity}
                  size="small"
                  color="secondary"
                >
                  <RemoveIcon fontSize="small" />
                </Fab>
                <span>{props.adultsQuantity}</span>
                <Fab
                  onClick={props.handlePlusQuantity}
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
                  onClick={props.handleMinusQuantity}
                  size="small"
                  color="secondary"
                >
                  <RemoveIcon fontSize="small" />
                </Fab>
                <span>{props.adultsQuantity}</span>
                <Fab
                  onClick={props.handlePlusQuantity}
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
                  onClick={props.handleMinusQuantity}
                  size="small"
                  color="secondary"
                >
                  <RemoveIcon fontSize="small" />
                </Fab>
                <span>{props.adultsQuantity}</span>
                <Fab
                  onClick={props.handlePlusQuantity}
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
    </Container>
  );
};

export default AdultsChildren;
