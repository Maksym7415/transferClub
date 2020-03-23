import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  orderItem: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    borderRadius: '10px',
  },
  idPriceHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  price: {
    marginLeft: 'auto',
    color: '#02f71f',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  address: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0',
    alignItems: 'center',
  },
  orderId: {
    fontSize: '15px',
  },
  button: {
    borderRadius: '20px',
    margin: '0 0 0 auto',
  },
  orderDetailsCollapse: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
  },
  collapseContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));
