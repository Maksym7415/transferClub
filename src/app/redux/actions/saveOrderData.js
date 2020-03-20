import * as types from '../constants/actionTypes'

export default (data, name) => ({
  type: types.SYNC,
  name,
  data
})