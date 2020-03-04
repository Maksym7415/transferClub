import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Header from './header';
import useStyles from '../../theme/styleTheme';


function ProgilePage(props) {
  const classes = useStyles()();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
            <Grid item xs={3}>
              <Paper className={classes.profilePaper}>
              <p>name</p>
              <p>phone</p>
              <p>data</p>
              <p>photo</p>
              <p>...</p>
              </Paper>
            </Grid>
        </Container>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({


});
const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default ProgilePage = connect(
  mapStateToProps,
  mapDispatchToProps,

)(ProgilePage);
