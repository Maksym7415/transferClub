import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  transferDateContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
  },
  dataPickerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    border: 'none',
    backgroundColor: 'transparent',
    borderRadius: '0',
    boxShadow: '0 0 0',
    justifyContent: 'flex-end',
    padding: '0',
  },
  returnWayContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: 'none',
    backgroundColor: 'transparent',
    borderRadius: '0',
    boxShadow: '0 0 0',
  },
  adultsChildsContainer: {
    padding: '0',
  },
  seatsListContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
  },
  childSeatsHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  adultsButtons: {
    width: '75%',
  },
  adultsQuantity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 0',
    justifyContent: 'space-between',
  },
  childSeatsItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  childSeatsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  childSeatsQuantity: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  meetingNamePromoCode: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  comment: {
    display: 'flex',
    width: '100%',
  },
  commentText: {
    width: '100%',
    height: '50px',
    resize: 'none',
    marginBottom: '10px',
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: '1rem',
    border: 'none',
    outline: 'none',
    padding: '10px',
  },
  contactsContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  carsContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
  },
  carsContainerLabel: {
    maxWidth: '30%',
    // display: 'flex',
    // justifyContent: 'flex-start',
    padding: '0',
  },
  carsContainerList: {
    display: 'flex',
    flexDirection: 'column',
  },
  carsListItem: {
    border: 'none',
    backgroundColor: 'transparent',
    borderRadius: '0',
    boxShadow: '0 0 0',
  },
}));
