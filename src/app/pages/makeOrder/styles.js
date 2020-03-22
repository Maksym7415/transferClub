import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  mapContainer: {
    width: '40%',
    minWidth: '400px',
    flexGrow: '1',
    height: '70vh',
    float: 'right',
  },
  simpleForm: {
    width: '50%',
    minWidth: '400px',
    flexGrow: '1',
  },
}));
