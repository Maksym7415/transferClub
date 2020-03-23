import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
  },
  carModel: {
    fontSize: '15px',
    fontWeight: '800',
  },
  image: {
    width: '50%',
    marginRight: '5%',
  },
  buttonPriceContainer: {
    marginLeft: 'auto',
    paddingRight: '7%',
  },
  button: {
    borderRadius: '20px',
    backgroundColor: '#41e310',
    padding: '10px 20px',
  },
  price: {
    marginRight: '15%',
    fontSize: '17px',
    fontWeight: 'bold',
  },
}));
