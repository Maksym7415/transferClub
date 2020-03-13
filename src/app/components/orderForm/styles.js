import { makeStyles } from '@material-ui/core/styles';

export default () => makeStyles((theme) => ({
  searchFormContainer: {
    width: '40%',
  },
  tabPanelContainer: {
    width: '100%',
    backgroundColor: 'white',
    opacity: '0.5',
  },
  tabPanel: {
    width: '100%',
  },
  paper: {
    padding: `0 ${theme.spacing(1)}`,
    display: 'flex',
    overflow: 'auto',
    marginBottom: theme.spacing(1),
    alignItems: 'center',
    width: '100%',
    border: '1px solid grey',
    height: '40px',
  },
  select: {
    height: '100%',
    paddingLeft: theme.spacing(1),
  },
  interMForm: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 24px',
    border: '1px solid grey',
  },
  selectCurr: {
    width: '20%',
    paddingLeft: '5px',
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
  paperPrice: {
    display: 'flex',
    overflow: 'auto',
    marginBottom: theme.spacing(1),
    alignItems: 'center',
    width: '100%',
    border: '1px solid grey',
    height: '40px',
  },
  offerPrice: {
    width: '100%',
    padding: '0',
  },
  returnWayContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  adultsQuantity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 0',
  },
  childSeatsItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  childSeatsQuantity: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
}));
