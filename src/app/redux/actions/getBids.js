import myAxios from '../constants/myAxios';
import action from '../constants/actionConstants';

export default (param) => async (dispatch) => {
  dispatch(action.Request('getBids'));

  try {
    const payload = await myAxios('/client/getBids', 'post', param);
    dispatch(action.RequestSuccess('getBids', payload));
  } catch (e) {
    dispatch(action.RequestFail('getBids', e));
  }
};
