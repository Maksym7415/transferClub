import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useStyles } from './styles';
import langData from './langData';
import { actionTestDocker } from '../../../redux/actions/testDocker';


const SignIn = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.history.location.pathname.split('/')[1]);

  const data = useSelector((state) => state.promiseStore.testDocker);
  const action = useDispatch();

  const handleClick = () => action(actionTestDocker());

  useEffect(() => {
    setLang(props.history.location.pathname.split('/')[1]);
  }, [props.history.location]);

  return (
    <Container className={classes.container} component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {langData.signIn[lang]}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label={langData.email[lang]}
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label={langData.password[lang]}
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label={langData.remmemberMe[lang]}
          />
          <Button
            type='button'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleClick}
          >
            {langData.signIn[lang]}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>
                {langData.forgotPassword[lang]}
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={props.onClick}>
                {langData.signUp[lang]}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(SignIn);
