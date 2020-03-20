import myAxios from '../constants/myAxios';
import action from '../constants/actionConstants';

export default (params) => async (dispatch) => {
  dispatch(action.Request('getOrders'));

  try {
    const payload = await myAxios('/client/getOrders', 'post', params);
    dispatch(action.RequestSuccess('getOrders', payload));
  } catch (e) {
    dispatch(action.RequestFail('getOrders', e));
  }
};
