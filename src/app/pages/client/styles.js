
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default () => makeStyles((theme) => ({
  client: {
    display: 'flex',
    // maxWidth: '1200px',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  // appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: '100%',
    width: '40%',
  },
  centerContainer: {
    display: 'flex',
    marginTop: '50px',
    justifyContent: 'center',
  },
  paper: {
    padding: `0 ${theme.spacing(1)}`,
    display: 'flex',
    overflow: 'auto',
    marginBottom: theme.spacing(1),
    alignItems: 'center',
    width: '100%',
    border: '1px solid grey',
    height: '40px',
  },
  fixedHeight: {
    height: 240,
  },
  wrapper: {
    maxWidth: '1200px',
  },
  tabPanelContainer: {
    width: '100%',
    backgroundColor: 'white',
    opacity: '0.5',
  },
  tabPanel: {
    width: '100%',
  },
  getOffers: {
    margin: '0 auto',
  },
  formControl: {
    height: '100%',
    width: '100%',
  },
  select: {
    height: '100%',
    paddingLeft: theme.spacing(1),
  },
  orders: {
    width: '50%',
    flexGrow: 1,

  },
  orderItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(2),
    fontFamily: 'Roboto',
  },
  orderItemContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  orderHeader: {
    marginTop: '100px',
    marginLeft: '20%',
  },
}));
