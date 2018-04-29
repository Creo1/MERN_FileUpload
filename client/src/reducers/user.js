import {File_DETAIL} from '../actions/types';

const INITIAL_STATE = {
fileData:[] 
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case File_DETAIL:
      return { ...state, fileData: action.payload };
  }

  return state;
}
