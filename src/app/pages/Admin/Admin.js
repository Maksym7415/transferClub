import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Block from '@material-ui/icons/Block';
import Delete from '@material-ui/icons/Delete';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import MaterialTable from 'material-table';
import Header from './header';
import useStyles from '../../theme/styleTheme';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const myStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

function AdminPage(props) {
  const classes = useStyles()();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
        <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Partners List" {...a11yProps(0)} />
          <Tab label="Clients List" {...a11yProps(1)} />
          <Tab label="Drivers List" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Mobile Phone</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Transport Basing</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>LTD DECANE</TableCell>
                    <TableCell>+380951478679</TableCell>
                    <TableCell>228@gmail.com</TableCell>
                    <TableCell>Bangladesh</TableCell>
                    <IconButton >
                      <Edit />
                   </IconButton>
                   <IconButton >
                      <Block />
                   </IconButton>
                   <IconButton >
                      <Delete />
                   </IconButton>
                  </TableRow>
                </TableBody>
              </Table>
              </Paper>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Mobile Phone</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>...</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>LTD DECANE</TableCell>
                    <TableCell>+380951478679</TableCell>
                    <TableCell>228@gmail.com</TableCell>
                    <TableCell>Bangladesh</TableCell>
                    <IconButton >
                      <Edit />
                   </IconButton>
                   <IconButton >
                      <Block />
                   </IconButton>
                   <IconButton >
                      <Delete />
                   </IconButton>
                  </TableRow>
                </TableBody>
              </Table>
              </Paper>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Mobile Phone</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>...</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>LTD DECANE</TableCell>
                    <TableCell>+380951478679</TableCell>
                    <TableCell>228@gmail.com</TableCell>
                    <TableCell>drtg</TableCell>
                    <IconButton >
                      <Edit />
                   </IconButton>
                   <IconButton >
                      <Block />
                   </IconButton>
                   <IconButton >
                      <Delete />
                   </IconButton>
                  </TableRow>
                </TableBody>
              </Table>
              </Paper>
            </Grid>
        </TabPanel>
        </Container>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({


});
const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default AdminPage = connect(
  mapStateToProps,
  mapDispatchToProps,

)(AdminPage);
