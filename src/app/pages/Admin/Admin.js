import React, { useEffect } from 'react';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './header';
import useStyles from '../../theme/styleTheme';

import { getAllOrdersAction } from '../../redux/actions/getAllOrder';
import { updatePartnerData } from '../../redux/actions/updatePartnerInfo';
import dive from '../../functions/dive';

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
  const [state, setState] = React.useState({
    columns: [
      {
        title: 'Name',
        field: 'name',
      },
      {
        title: 'Email',
        field: 'Email',
      },
      {
        title: 'Mobile Phone',
        field: 'phone',
      },
      {
        title: 'Country',
        field: 'Country',
      },
      {
        title: 'Transport Basing',
        field: 'Transport',
      },
    ],
    data: [
      {
        name: 'LTD PARIS', Email: '228@gmail.com', phone: 3806457951, Country: 'France', Transport: 'France',
      },
    ],
  });

  useEffect(() => {
    props.getAllOrdersAction();
  }, [props.upDateOrder]);

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
        {!props.isFetching ? <MaterialTable
        localization={{
          header: {
            actions: '',
          },
        }}
        options={{
          search: false,
          paging: false,
          actionsColumnIndex: state.columns.length,
          actionsColumnTitle: '',
          rowStyle: {
            backgroundColor: '#EEE',
          },
          headerStyle: {
            backgroundColor: '#3f51b5',
            color: '#FFF',
          },
        }}
       title=""
       style = {{ height: '0px' }}
      columns={state.columns}
      data={props.data}
      actions={[
        {
          icon: 'block',
          tooltip: 'Block',
          onClick: (event, rowData) => {
            // Do save operation
            console.log(event, rowData);
          },
        },
      ]}
      editable={{
        onRowUpdate: (newData, oldData) => new Promise((resolve) => {
          resolve();
          props.updatePartnerData(newData);
        }),
        onRowDelete: (oldData) => new Promise((resolve) => {
          console.log(1);
          if (!false) resolve();
          // resolve();

          // setState((prevState) => {
          //   const data = [...prevState.data];
          //   data.splice(data.indexOf(oldData), 1);
          //   return { ...prevState, data };
          // });
        }),
      }}
    /> : <LinearProgress />}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>

        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>

        </TabPanel>
        </Container>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({

  data: dive`${state}ordersStore.getOrders.payload`,
  upDateOrder: dive`${state}ordersStore.upDateOrder.payload`,
  isFetching: state.ordersStore.isFetching,

});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllOrdersAction,
  updatePartnerData,
}, dispatch);

export default AdminPage = connect(
  mapStateToProps,
  mapDispatchToProps,

)(AdminPage);
