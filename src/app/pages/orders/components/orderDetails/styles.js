import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  orderDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
    width: '100%',
    justifyContent: 'space-between',
    padding: '20px 0',
  },
  mapContainer: {
    width: '50%',
    height: '70vh',
  },
  formsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    flexWrap: 'wrap',
  },
  formLabel: {
    width: '50%',
    minWidth: '100px',
    margin: '0',
  },
  formValue: {
    width: '100%',
    minWidth: '100px',
    margin: '0',
  },
  formInput: {
    width: '100%',
    minWidth: '100px',
    border: '1px solid grey',
  },
  orderFormContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  valuesContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
