import action from '../constants/actionConstants';
import actionToken from './actionToken';
import myAxios from '../constants/myAxios';

export default (data) => async (dispatch) => {
  dispatch(action.Request('auth'));
  try {
    const payload = await myAxios('/user/authorization', 'post', data);
    console.log('token');
    dispatch(action.RequestSuccess('auth', payload)) && dispatch(actionToken(payload.data, 'token'));
  } catch (err) {
    dispatch(action.RequestFail('auth', err));
  }
};
