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
}));
