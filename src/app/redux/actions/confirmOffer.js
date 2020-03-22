import myAxios from '../constants/myAxios';
import action from '../constants/actionConstants';

export default (data) => async (dispatch) => {
  dispatch(action.Request('confirmBid'));

  try {
    const payload = await myAxios('/client/changeBidStatus', 'put', data);
    dispatch(action.RequestSuccess('confirmBid', payload));
  } catch (e) {
    dispatch(action.RequestFail('confirmBid', e));
  }
};
