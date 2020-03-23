import { makeStyles } from '@material-ui/core/styles';

export default () => makeStyles((theme) => ({
  langMenuIcon: {
    position: 'relative',
  },
  langMenu: {
    padding: '0 5px',
    position: 'absolute',
    right: '0',
    backgroundColor: 'white',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'row',
    minWidth: '180px',
    justifyContent: 'space-between',
    // bottom: '0',
  },
  langMenuList: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '600px',

  },
  langMenuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    // boxShadow: 'none',
  },
  langIcon: {
    width: '30px',
    height: '20px',
  },
}));
