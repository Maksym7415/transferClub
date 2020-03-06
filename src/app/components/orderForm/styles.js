import { makeStyles } from '@material-ui/core/styles';

export default () => makeStyles((theme) => ({
  tabPanelContainer: {
    width: '100%',
    backgroundColor: 'white',
    opacity: '0.5',
  },
  tabPanel: {
    width: '100%',
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
  select: {
    height: '100%',
    paddingLeft: theme.spacing(1),
  },
  interMForm: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 24px',
    border: '1px solid grey',
  },
  selectCurr: {
    width: '20%',
    paddingLeft: '5px',
  },
  cars: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '0',
  },
  carsCard: {
    width: '100%',
    height: '50px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperPrice: {
    display: 'flex',
    overflow: 'auto',
    marginBottom: theme.spacing(1),
    alignItems: 'center',
    width: '100%',
    border: '1px solid grey',
    height: '40px',
  },
  offerPrice: {
    width: '100%',
    padding: '0',
  },
}));
