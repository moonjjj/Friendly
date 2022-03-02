import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './userReducer';
import mbtiReducer from './mbtiReducer';

const rootReducer = combineReducers({
    userData: userReducer,
    mbti: mbtiReducer,
});
const persistConfig = {
    key: 'root',
    storage,
  };

export default persistReducer(persistConfig, rootReducer);


