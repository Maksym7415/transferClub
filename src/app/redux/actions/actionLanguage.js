import { SYNC } from '../constants/actionTypes';

export default (data, name) => ({
  type: SYNC,
  data,
  name,
});
