
import action from '../constants/actionConstants';
import actionToken from './actionToken';

export const authsAction = (payload) => async (dispatch) => {
  dispatch(action.Request('auth'));
  try {
    const res = await fetch('http://localhost:3000/token');
    const payload = await res.json();
    dispatch(action.RequestSuccess(payload, 'auth')) && dispatch(actionToken(payload.token, 'token'));
  } catch (err) {
    dispatch(action.RequestFail(err, 'auth'));
  }
};
