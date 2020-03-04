import action from '../constants/actionConstants';


export const getAllOrdersAction = (payload) => async (dispatch) => {
  dispatch(action.Request('getOrders'));
  try {
    const res = await fetch('http://localhost:3000/data');
    const payload = await res.json();
    setTimeout(() => { dispatch(action.RequestSuccess(payload, 'getOrders')); }, 1500);
  } catch (err) {
    dispatch(action.RequestFail(err, 'getOrders'));
  }
};
