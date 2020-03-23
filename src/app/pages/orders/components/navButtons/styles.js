import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    marginBottom: '10px',
    width: '100%',
    display: 'flex',
  },
  button: {
    borderRadius: '20px',
    marginRight: '20px',
  },
  buttonPayment: {
    borderRadius: '20px',
    marginLeft: 'auto',
  },
}));
