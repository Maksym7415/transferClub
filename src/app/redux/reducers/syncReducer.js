import jwt_decode from 'jwt-decode';
import * as types from '../constants/actionTypes';

export default (state = {}, { data, type, name }) => {
  switch (type) {
    case types.SYNC: {
      if (name === 'token') {
        const payload = jwt_decode(data);
        return {
          ...state,
          [name]: {
            data,
            payload,
          },
        };
      }

      return {
        ...state,
        [name]: data,
      };
    }
    case types.LOGOUT: {
      localStorage.removeItem('authToken');
      return {
        ...state,
        token: undefined,
      };
    }
    case types.DELETE_DATA: {
      return {
        ...state,
        [name]: undefined,
      };
    }
    default: return state;
  }
};
