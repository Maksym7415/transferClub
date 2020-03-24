import myAxios from '../constants/myAxios';
import action from '../constants/actionConstants';

export default (data) => async (dispatch) => {
  dispatch(action.Request('rating'));

  try {
    const payload = await myAxios('/client/addRating', 'post', data);
    dispatch(action.RequestSuccess('rating', payload));
  } catch (e) {
    dispatch(action.RequestFail('rating', e));
  }
};
