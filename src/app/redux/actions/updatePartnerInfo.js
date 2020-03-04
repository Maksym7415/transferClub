import action from '../constants/actionConstants';


export const updatePartnerData = (updateData) => async (dispatch) => {
  console.log(updateData);
  dispatch(action.Request('upDateOrder'));

  try {
    const res = await fetch(`http://localhost:3000/data/${updateData.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });
    const payload = await res.json();
    setTimeout(() => dispatch(action.RequestSuccess(payload, 'upDateOrder')), 1000);
  } catch (err) {
    dispatch(action.RequestFail(err, 'upDateOrder'));
  }
};
