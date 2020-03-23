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
import langData from './langData';

const AdditionalOptions = (props) => {
  const classes = useStyles();

  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <div className={classes.addOptionsContainer}>
      <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>{langData.additionalOptions[props.lang]}</h3>
      <div>
        <div>
          <FormControlLabel
              control={<Checkbox name='checkOfferPrice' onChange={props.handleChangeCheckbox} checked={props.checked.checkOfferPrice || false} />}
              label={langData.offerPrice[props.lang]}
            />
          <div>
            <Grow
              in={props.checked.checkOfferPrice}
              mountOnEnter={true}
              unmountOnExit={true}
              {...(props.checked.checkOfferPrice ? { timeout: 1000 } : { timeout: 1000 })}
            >
              <Paper elevation={4} className={classes.paper}>
                <PriceOffer
                  offerPrice={props.offerPrice}
                  offerPriceCurrency={props.offerPriceCurrency}
                  handleChangeOfferPriceCurrency={props.handleChangeOfferPriceCurrency}
                  handleOfferPrice={props.handleOfferPrice}
                />
              </Paper>
            </Grow>
          </div>
        </div>
        <FormControlLabel
            control={<Checkbox name='checkShareTrip' onChange={props.handleChangeCheckbox} checked={props.checked.checkShareTrip || false} />}
            label={langData.shareTrip[props.lang]}
          />
        <div>
          <FormControlLabel
              control={<Checkbox name='flightNumber' onChange={props.handleChangeCheckbox} checked={props.checked.flightNumber || false} />}
              label={langData.flightNum[props.lang]}
            />
          <div>
            <Grow
              in={props.checked.flightNumber}
              mountOnEnter={true}
              unmountOnExit={true}
              {...(props.checked.flightNumber ? { timeout: 1000 } : { timeout: 1000 })}
            >
              <Paper elevation={4} className={classes.paper}>
                <Input
                  style={{ width: '100%' }}
                  disableUnderline={true}
                  placeholder={langData.flightNumPlaceholder[props.lang]}
                  value={props.flightTrainNumber}
                  onChange={props.handleFlightTrainNumber}
                />
              </Paper>
            </Grow>
          </div>
          <div>
            <FormControlLabel
                control={<Checkbox name='meetingName' onChange={props.handleChangeCheckbox} checked={props.checked.meetingName || false} />}
                label={langData.nameSign[props.lang]}
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
                      placeholder={langData.nameSignPlaceholder[props.lang]}
                      value={props.nameSign}
                      onChange={props.handleNameSign}
                    />
                  </Paper>
                </Paper>
              </Grow>
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox name='promoCode' onChange={props.handleChangeCheckbox} checked={props.checked.promoCode || false} />}
                label={langData.promocode[props.lang]}
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
                          placeholder={langData.promocodePlaceholder[props.lang]}
                          value={props.promocode}
                          onChange={props.handlePromocode}
                        />
                      </Paper>
                    </Paper>
                  </Grow>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalOptions;
