
import action from '../constants/actionConstants';

export const dataAction = (payload) => async (dispatch) => {
  dispatch(action.Request('data'));
  try {
    const res = await fetch('http://localhost:3000/token');
    const payload = await res.json();
    dispatch(action.RequestSuccess(payload, 'data'));
  } catch (err) {
    dispatch(action.RequestFail(err, 'data'));
  }
};

// export const deleteOrders = (payload) => ({
//   type: types.DELETE,
//   payload,
//   name: payload,
// });
