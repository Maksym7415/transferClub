import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { loadCSS } from 'fg-loadcss';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import useStyles from './styles';
import PriceOffer from './priceOffer';

const AdditionalOptions = (props) => {
  const classes = useStyles()();
  const [checked, setChecked] = useState({});

  const handleChangeCheckbox = (event) => {
    const item = event.target.name;
    setChecked((prev) => ({ ...prev, [item]: event.target.checked }));
  };

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
              control={<Checkbox name='checkOfferPrice' onChange={handleChangeCheckbox} checked={checked.checkOfferPrice || false} />}
              label='Offer your price'
            />
          <div>
            <Grow
              in={checked.checkOfferPrice}
              mountOnEnter={true}
              unmountOnExit={true}
              {...(checked.checkOfferPrice ? { timeout: 1000 } : { timeout: 1000 })}
            >
              <Paper elevation={4} className={classes.paper}>
                <PriceOffer />
              </Paper>
            </Grow>
          </div>
        </div>
        <FormControlLabel
            control={<Checkbox name='checkShareTrip' onChange={handleChangeCheckbox} checked={checked.checkShareTrip || false} />}
            label='I want to share my trip'
          />
        <div>
          <FormControlLabel
              control={<Checkbox name='flightNumber' onChange={handleChangeCheckbox} checked={checked.flightNumber || false} />}
              label='Flight or train number'
            />
          <div>
            <Grow
              in={checked.flightNumber}
              mountOnEnter={true}
              unmountOnExit={true}
              {...(checked.flightNumber ? { timeout: 1000 } : { timeout: 1000 })}
            >
              <Paper elevation={4} className={classes.paper}>
                <PriceOffer />
              </Paper>
            </Grow>
          </div>
          <div>
            <FormControlLabel
                control={<Checkbox name='meetingName' onChange={handleChangeCheckbox} checked={checked.meetingName || false} />}
                label='Meeting with a name sign is required'
              />
            <div>
              <Grow
                in={checked.meetingName}
                mountOnEnter={true}
                unmountOnExit={true}
                {...(checked.meetingName ? { timeout: 1000 } : { timeout: 1000 })}
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
                control={<Checkbox name='promoCode' onChange={handleChangeCheckbox} checked={checked.promoCode || false} />}
                label='Meeting with a name sign is required'
              />
                <div>
                  <Grow
                    in={checked.promoCode}
                    mountOnEnter={true}
                    unmountOnExit={true}
                    {...(checked.promoCode ? { timeout: 1000 } : { timeout: 1000 })}
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
