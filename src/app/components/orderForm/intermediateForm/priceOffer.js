import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

const PriceOffer = (props) => {
  const classes = useStyles();
  // const [price, setPrice] = useState('');
  // const [currency, setCurrency] = useState();

  // const handleChangeCurrency = (e) => setCurrency(e.target.value);
  // const handlePrice = (e) => setPrice(e.target.value);

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
          >
            <option value='euro'>EU</option>
            <option value='Usd'>USD</option>
          </NativeSelect>
          <Input fullWidth={true} value={props.offerPrice} onChange={props.handleOfferPrice} disableUnderline={true} placeholder='Offer your price'/>
        </Paper>
      </Container>
    </>
  );
};

export default PriceOffer;
