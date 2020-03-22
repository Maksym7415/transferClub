import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  selectCurrency: {
    width: '20%',
    paddingLeft: '5px',
  },
  offerPrice: {
    width: '100%',
    padding: '0',
  },
  paperPrice: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 'none',
  },
  cars: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '0',
    marginTop: '20px',
  },
  carsCard: {
    width: '100%',
    height: '80px',
    flexDirection: 'column',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  carImage: {
    width: '70%',
    height: '60%',
  },
}));
