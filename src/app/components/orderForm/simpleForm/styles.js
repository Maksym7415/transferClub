import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
}));
