import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  orderItem: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    borderRadius: '10px'
  },
  address: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0',
    alignItems: 'center'
  },
  orderId: {
    fontSize: '15px'
  }
}));
