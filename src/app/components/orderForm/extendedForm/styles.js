import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  transferDateContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    marginBottom: '10px',
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
  dataPickerItem: {
    marginRight: '20px',
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
    width: '100%',
    marginBottom: '10px',
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
    marginBottom: '10px',
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
    justifyContent: 'flex-start',
  },
  meetingNamePromoCode: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  comment: {
    display: 'flex',
    width: '50%',
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
  contentItem: {
    width: '50%',
  },
  carsContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
    width: '50%',
    margin: '0',
    marginBottom: '10px',
  },
  carsContainerLabel: {
    maxWidth: '30%',
    padding: '0',
    fontSize: '16px',
    fontWeight: 'bold',
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
  addOptionsContainer: {
    width: '50%',
    marginBottom: '10px',
  },
}));
