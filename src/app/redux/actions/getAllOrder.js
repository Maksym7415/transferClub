import action from '../constants/actionConstants';


export const getAllOrdersAction = (payload) => async (dispatch) => {
  dispatch(action.Request('getOrders'));
  try {
    const res = await fetch('http://localhost:3000/orders');
    const payload = await res.json();
    dispatch(action.RequestSuccess(payload, 'getOrders'));
  } catch (err) {
    dispatch(action.RequestFail(err, 'getOrders'));
  }
};
