import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import sha1 from 'sha1';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import useStyle from './styles';

const Pay = (props) => {
  const classes = useStyle()();
  const [order] = useState('order');
  const [orderId] = useState('orderDemo3');
  const [currency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [merchantId] = useState('1396424');
  const [signature, setSignature] = useState('');

  const handleAmount = (e) => setAmount(e.target.value);
  const handleSignature = (e) => setSignature(e.target.value);

  return (
    <>
      <CssBaseline />
      <Container className={classes.formContainer} >
        <form className={classes.form} name="tocheckout" method="POST" action="https://api.fondy.eu/api/checkout/redirect/">
          {/* <input type="text" name="server_callback_url" value="http://localhost:3000/en/pay/" /> */}
          <input type="text" name="response_url" value="http://localhost:3000/en/pay" />
          <input type="hidden" name="order_id" value={orderId}/>
          <input type="hidden" name="order_desc" value={order} />
          <input type="hidden" name="currency" value={currency} />
          <Input type="text" onChange={handleAmount} name="amount" value={amount} />
          <Input type="hidden" onChange={handleSignature} name="signature" value={sha1(`test|${amount}|${currency}|${merchantId}|${order}|${orderId}|http://localhost:3000/en/pay`)} />
          <Input type="hidden" name="merchant_id" value={merchantId} />
          {/* <input type="text" name="currency" value="USD"/>
          <input type="text" name="amount" value="125"/>
          <input type="text" name="signature" value={sha1('test|125|USD|1396424|order|order12345')} />
          <input type="text" name="merchant_id" value="1396424"/> */}
          <input value='Pay' type='submit' />
        </form>
        {/* <button onClick={handleClick}>Fetch</button> */}
      </Container>
    </>
  );
};

export default Pay;
