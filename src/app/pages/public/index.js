import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleForm from '../../components/orderForm/simpleForm';
import useStyle from './styles';

const Public = (props) => {
  const classes = useStyle()();

  return (
    <>
      <Container className={classes.container}>
        <SimpleForm />
      </Container>
    </>
  );
};

export default Public;
