import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Header from './header';
import useStyles from '../../theme/styleTheme';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, classes, onClose, ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function RegistrationPage(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles()();
  const [spacing, setSpacing] = React.useState(2);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item xs={3} onClick = {handleClickOpen} >
              <Paper className={classes.profilePaper}>
              <p>name</p>
              </Paper>
            </Grid>
            <Grid item xs={3} onClick = {handleClickOpen}>
              <Paper className={classes.profilePaper}>
              <p>name</p>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.profilePaper}>
              <p>name</p>

              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.profilePaper}>
              <p>name</p>

              </Paper>
            </Grid>
            <Grid item xs={3} onClick = {handleClickOpen}>
              <Paper className={classes.profilePaper}>
              <p>name</p>

              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.profilePaper}>
              <p>name</p>

              </Paper>
            </Grid>
            </Grid>
            </Grid>
        </Container>
      </main>
      <Dialog maxWidth='sm' fullWidth = 'fullWidth' onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Application for Registration
        </DialogTitle>
        <DialogContent dividers>
        <Paper className={classes.profilePaperRegistr}>

             {` name: ${open}`}
          </Paper>
          <Paper className={classes.profilePaperRegistr}>
             {' email: sdf@gmail.com'}
          </Paper>
          <Paper className={classes.profilePaperRegistr}>
             {` mob phone: ${open}`}
          </Paper>
          <Paper className={classes.profilePaperRegistr}>
             {` Transport Basing: ${open}`}
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose} color="primary">
            Accept
          </Button>
          <Button variant="contained" autoFocus onClick={handleClose} color="secondary">
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({


});
const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default RegistrationPage = connect(
  mapStateToProps,
  mapDispatchToProps,

)(RegistrationPage);
