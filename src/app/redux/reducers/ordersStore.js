import * as types from '../constants/actionTypes';

export default (state = {}, {
  type, payload, err, name,
}) => {
  switch (type) {
    case types.REQUEST: {
      return {
        ...state,
        isFetching: true,
        [name]: {
          payload: undefined,
        },
      };
    }
    case types.REQUEST_SUCCESS: {
      if (name === 'auth') localStorage.authToken = payload.token;
      return {
        ...state,
        isFetching: false,
        [name]: {
          payload,
        },

      };
    }
    case types.REQUEST_FAIL: {
      return {
        ...state,
        isFetching: false,
        [name]: {
          err,
        },
      };
    }
    case types.DELETE_DATA: {
      return {
        ...state,
        [name]: {
        },
      };
    }
    default: return state;
  }
};
