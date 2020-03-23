import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    marginBottom: '10px',
    width: '100%',
    display: 'flex',
  },
  button: {
    backgroundColor: '#fa730c',
    borderRadius: '20px',
    marginRight: '20px',
  },
  buttonPayment: {
    backgroundColor: '#fa730c',
    borderRadius: '20px',
    marginLeft: 'auto',
  },
}));
