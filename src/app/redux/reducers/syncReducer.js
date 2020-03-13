import jwt_decode from 'jwt-decode';
import * as types from '../constants/actionTypes';

export default (state = {}, { data, type, name }) => {
  switch (type) {
    case types.SYNC: {
      if (name === 'token') {
        const token = jwt_decode(data);
        return {
          ...state,
          [name]: token,
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
        [name]: {

        },
      };
    }
    default: return state;
  }
};
