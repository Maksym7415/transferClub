import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router';
import { useStyles } from './styles';
import langData from './langData';

const PriceOffer = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);


  return (
    <>
      <Container className={classes.offerPrice}>
        <Paper className={classes.paperPrice}>
          <NativeSelect
            native='true'
            className={classes.selectCurrency}
            variant='filled'
            value={props.offerPriceCurrency}
            onChange={props.handleChangeOfferPriceCurrency}
            disableUnderline={true}
            style={{ minWidth: '80px' }}
          >
            <option value='euro'>EU</option>
            <option value='Usd'>USD</option>
          </NativeSelect>
          <Input fullWidth={true} value={props.offerPrice} onChange={props.handleOfferPrice} disableUnderline={true} placeholder={langData.offerPrice[lang]}/>
        </Paper>
      </Container>
    </>
  );
};

export default withRouter(PriceOffer);
