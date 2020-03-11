import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

const PriceOffer = (props) => {
  const classes = useStyles()();
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState();

  const handleChangeCurrency = (e) => setCurrency(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);

  return (
    <>
      <Container className={classes.offerPrice}>
        <Paper className={classes.paperPrice}>
          <NativeSelect
            native='true'
            className={classes.selectCurr}
            variant='filled'
            value={currency}
            onChange={handleChangeCurrency}
            disableUnderline={true}
          >
            <option value='euro'>EU</option>
            <option value='Usd'>USD</option>
          </NativeSelect>
          <Input fullWidth={true} value={price} onChange={handlePrice} disableUnderline={true} placeholder='Offer yuor price'/>
        </Paper>
      </Container>
    </>
  );
};

export default PriceOffer;
