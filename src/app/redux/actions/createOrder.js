import myAxios from '../constants/myAxios';
import action from '../constants/actionConstants';

export default (data) => async (dispatch) => {
  dispatch(action.Request('createOrder'));

  try {
    const payload = await myAxios('/client/createOrder', 'post', data);
    dispatch(action.RequestSuccess('createOrder', payload));
  } catch (e) {
    dispatch(action.RequestFail('createOrder', e));
  }
};
