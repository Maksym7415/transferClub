import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import sha1 from 'sha1';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import useStyle from './styles';

const Pay = (props) => {
  const classes = useStyle()();
  const [order] = useState('order');
  const [orderId] = useState('orderDemo28');
  const [currency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [merchantId] = useState('1396424');
  const [signature, setSignature] = useState('');

  const handleAmount = (e) => {
    setAmount(e.target.value);
    setSignature(sha1('test|100|USD|1396424|order|orderDemo28|http://localhost:3000/en/pay'));
  };
  const handleSignature = (e) => setSignature(e.target.value);

  return (
    <>
      <CssBaseline />
      <Container className={classes.formContainer} >
      {console.log(signature)}
        <form className={classes.form} target='_blanc' name="tocheckout" method="POST" action="https://api.fondy.eu/api/checkout/redirect/">
          <input type="text" name="response_url" value="http://localhost:3000/en/pay" />
          <input type="hidden" name="order_id" value='orderDemo31'/>
          <input type="hidden" name="order_desc" value='order' />
          <input type="text" name="currency" value="USD"/>
          <input type="text" name="amount" value="125"/>
          <input type="text" name="signature" value={sha1('JdnSp79bmIvKPAMNr8VJ2WwOyBWinjIs|125|USD|1440784|order|orderDemo31|http://localhost:3000/en/pay')} />
          <input type="text" name="merchant_id" value="1440784"/>
          <input value='Pay' type='submit' />
        </form>
        {/* <button onClick={handleClick}>Fetch</button> */}
      </Container>
    </>
  );
};

export default Pay;

const obj = {
  rrn: '',
  masked_card: '444455XXXXXX1111',
  sender_cell_phone: '',
  response_signature_string: '**********|100|USD|100|123456|444455|VISA|USD|5|444455XXXXXX1111|1396424|orderDemo25|approved|11.03.2020 10:16:17|203995437|card|success|0|client@example.com|0|purchase',
  response_status: 'success',
  sender_account: '',
  fee: '',
  rectoken_lifetime: '',
  reversal_amount: '0',
  settlement_amount: '0',
  actual_amount: '100',
  order_status: 'approved',
  response_description: '',
  verification_status: '',
  order_time: '11.03.2020 10:16:17',
  actual_currency: 'USD',
  order_id: 'orderDemo25',
  parent_order_id: '',
  merchant_data: '',
  tran_type: 'purchase',
  eci: '5',
  settlement_date: '',
  payment_system: 'card',
  rectoken: '',
  approval_code: '123456',
  merchant_id: '1396424',
  settlement_currency: '',
  payment_id: '203995437',
  product_id: '',
  currency: 'USD',
  card_bin: '444455',
  response_code: '',
  card_type: 'VISA',
  amount: '100',
  sender_email: 'client@example.com',
  signature: 'c7dcdda8ade318d8c6895bad78951499912e3d87',
};

const mySignature = '5398ce9ddd7fadd839505d84d6ff7284293ec83d';
