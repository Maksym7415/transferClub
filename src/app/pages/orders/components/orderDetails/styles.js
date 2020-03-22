import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  orderDetailsRoot: {
    display: 'flex',
    flexDirection: 'column',
  },
  orderDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    padding: '20px 0 5px 0',
    flexWrap: 'wrap',
  },
  mapContainer: {
    width: '50%',
    minWidth: '500px',
    height: '70vh',
    flexGrow: '1',
  },
  formsContainer: {
    display: 'flex',
    minWidth: '400px',
    flexDirection: 'column',
    width: '50%',
    flexWrap: 'wrap',
    flexGrow: 1,
    padding: '0 20px 0 0',
  },
  formLabel: {
    width: '50%',
    minWidth: '100px',
    margin: '0',
  },
  gridContainer: {
    padding: '0',
  },
  gridRow: {
    alignItems: 'center',
    height: '50px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexGrow: '1',
  },
  formInput: {
    width: '100%',
    minWidth: '100px',
  },
  orderFormContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonSave: {
    backgroundColor: '#41e310',
    width: '30%',
    borderRadius: '20px',
    margin: '20px auto',
  },
  buttonReject: {
    minWidth: '30%',
    backgroundColor: '#de3000',
    borderRadius: '20px',
    margin: '10px auto 0 0',
  },
}));
