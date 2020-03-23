import { makeStyles } from '@material-ui/core/styles';

export default () => makeStyles((theme) => ({
  container: {
    paddingTop: '100px',
    width: '40%',
  },
  bgImage: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    left: '0',
    top: '0',
    oppacity: '0.1',
  },
}));
