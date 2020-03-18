import { makeStyles } from '@material-ui/core/styles';

export default () => makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '100px 20px 20px 20px',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  mapContainer: {
    width: '40%',
    height: '70vh',
  },
}));
