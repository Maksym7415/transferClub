import action from '../constants/actionConstants';
import myAxios from '../constants/myAxios';

export const actionTestDocker = () => async (dispatch) => {
  dispatch(action.Request('testDocker'));
  try {
    const payload = await myAxios('api/pay', 'get');
    return dispatch(action.RequestSuccess(payload, 'testDocker'));
  } catch (e) {
    dispatch(action.RequestFail(e, 'testDocker'));
  }
};
