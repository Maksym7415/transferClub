import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import sha1 from 'sha1';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import useStyle from './styles';

const Pay = (props) => {
  const classes = useStyle()();
  const [order] = useState('order');
  const [orderId] = useState('orderDemo56');
  const [currency] = useState('USD');
  const [amount, setAmount] = useState('100');
  const [merchantId] = useState('1440784');
  const [signature, setSignature] = useState(sha1(`JdnSp79bmIvKPAMNr8VJ2WwOyBWinjIs|${amount}|${currency}|${merchantId}|${order}|${orderId}`));

  return (
    <>
      <CssBaseline />
      <Container className={classes.formContainer} >
      {console.log(signature)}
        <form className={classes.form} name="tocheckout" method="POST" action="https://api.fondy.eu/api/checkout/redirect/">
          <input type="hidden" readOnly name="order_id" value={orderId}/>
          <input type="hidden" readOnly name="order_desc" value={order} />
          <input type="hidden" readOnly name="currency" value={currency}/>
          <input type="hidden" readOnly name="amount" value={amount}/>
          <input type="hidden" readOnly name="signature" value={signature} />
          <input type="hidden" readOnly name="merchant_id" value={merchantId}/>
          <input value='Pay' type='submit' />
        </form>
        {/* <button onClick={handleClick}>Fetch</button> */}
      </Container>
    </>
  );
};

export default Pay;
