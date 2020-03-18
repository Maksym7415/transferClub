import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import { withRouter } from 'react-router';
import PhoneInput from 'react-phone-input-2';
import actionRegister from '../../../redux/actions/registration';
import actionAuth from '../../../redux/actions/auth';
import { useStyles } from './styles';
import langData from './langData';
import 'react-phone-input-2/lib/material.css';
import dive from '../../../functions/dive';


const SignUp = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.history.location.pathname.split('/')[1]);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const regResponse = useSelector((state) => dive`${state}promiseReducer.register.payload`);
  const regError = useSelector((state) => dive`${state}promiseReducer.register.error`);
  const authResponse = useSelector((state) => dive`${state}promiseReducer.auth.payload`);
  const dispatch = useDispatch();

  const changeName = (e) => setName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleRegister = () => dispatch(actionRegister({
    name, email, phone, password,
  }));

  useEffect(() => {
    setLang(props.history.location.pathname.split('/')[1]);
  }, [props.history.location]);

  useEffect(() => {
    if (regResponse) {
      dispatch(actionAuth({ password, email }));
    }
    if (regError) {
      alert('fail');
    }
  }, [regResponse, regError]);

  useEffect(() => {
    if (authResponse) {
      props.history.push('/');
    }
  }, [authResponse]);

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {langData.signUp[lang]}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                onChange={changeName}
                value={name}
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label={langData.name[lang]}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                onChange={changeEmail}
                value={email}
                required
                fullWidth
                id="email"
                label={langData.email[lang]}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={`phone-input ${classes.phoneFormControl}`}>
                <PhoneInput
                  placeholder="Enter phone number"
                  country="ua"
                  value={phone}
                  onChange={setPhone}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={changePassword}
                value={password}
                required
                fullWidth
                id="password"
                label={langData.password[lang]}
                name="password"
                // autoComplete="email"
                type='password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={changeConfirmPassword}
                value={confirmPassword}
                required
                fullWidth
                name="confirmPassword"
                label={langData.confirmPassword[lang]}
                type="password"
                id="comfirmPassword"
                // autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={langData.checkbox[lang]}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            onClick={handleRegister}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {langData.signUp[lang]}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={props.onClick}>
                {langData.alreadyHave[lang]}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(SignUp);
