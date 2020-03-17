import action from '../constants/actionConstants';
import myAxios from '../constants/myAxios';

export default (data) => async (dispatch) => {
  dispatch(action.Request('register'));

  try {
    const payload = await myAxios('/user/client/registration', 'post', data);
    dispatch(action.RequestSuccess('register', payload));
  } catch (error) {
    dispatch(action.RequestFail('register', error));
  }
};
