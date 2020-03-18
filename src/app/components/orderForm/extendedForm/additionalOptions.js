import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { loadCSS } from 'fg-loadcss';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import PriceOffer from '../intermediateForm/priceOffer';

const AdditionalOptions = (props) => {
  const classes = useStyles();

  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <>
      <h3>Additional options</h3>
      <div>
        <div>
          <FormControlLabel
              control={<Checkbox name='checkOfferPrice' onChange={props.handleChangeCheckbox} checked={props.checked.checkOfferPrice || false} />}
              label='Offer your price'
            />
          <div>
            <Grow
              in={props.checked.checkOfferPrice}
              mountOnEnter={true}
              unmountOnExit={true}
              {...(props.checked.checkOfferPrice ? { timeout: 1000 } : { timeout: 1000 })}
            >
              <Paper elevation={4} className={classes.paper}>
                <PriceOffer />
              </Paper>
            </Grow>
          </div>
        </div>
        <FormControlLabel
            control={<Checkbox name='checkShareTrip' onChange={props.handleChangeCheckbox} checked={props.checked.checkShareTrip || false} />}
            label='I want to share my trip'
          />
        <div>
          <FormControlLabel
              control={<Checkbox name='flightNumber' onChange={props.handleChangeCheckbox} checked={props.checked.flightNumber || false} />}
              label='Flight or train number'
            />
          <div>
            <Grow
              in={props.checked.flightNumber}
              mountOnEnter={true}
              unmountOnExit={true}
              {...(props.checked.flightNumber ? { timeout: 1000 } : { timeout: 1000 })}
            >
              <Paper elevation={4} className={classes.paper}>
                <PriceOffer />
              </Paper>
            </Grow>
          </div>
          <div>
            <FormControlLabel
                control={<Checkbox name='meetingName' onChange={props.handleChangeCheckbox} checked={props.checked.meetingName || false} />}
                label='Meeting with a name sign is required'
              />
            <div>
              <Grow
                in={props.checked.meetingName}
                mountOnEnter={true}
                unmountOnExit={true}
                {...(props.checked.meetingName ? { timeout: 1000 } : { timeout: 1000 })}
              >
                <Paper elevation={4} className={classes.paper}>
                  <Paper className={classes.meetingNamePromoCode}>
                    <Icon style={{ margin: '0 10px' }} className='far fa-user' />
                    <Input
                      style={{ width: '100%' }}
                      disableUnderline={true}
                      placeholder='Please fill in passengers name'
                    />
                  </Paper>
                </Paper>
              </Grow>
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox name='promoCode' onChange={props.handleChangeCheckbox} checked={props.checked.promoCode || false} />}
                label='Promocode'
              />
                <div>
                  <Grow
                    in={props.checked.promoCode}
                    mountOnEnter={true}
                    unmountOnExit={true}
                    {...(props.checked.promoCode ? { timeout: 1000 } : { timeout: 1000 })}
                  >
                    <Paper elevation={4} className={classes.paper}>
                      <Paper className={classes.meetingNamePromoCode}>
                        <Icon style={{ margin: '0 10px', fontSize: '20px' }} className='fas fa-percent' />
                        <Input
                          style={{ width: '100%' }}
                          disableUnderline={true}
                          placeholder='Enter promo code'
                        />
                      </Paper>
                    </Paper>
                  </Grow>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalOptions;
