// 引入combineReducers来进行分仓，并使用immutable来实现数据的统一（不可随便更改）
import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../components/Header/store'
import { reducer as HomeReducer } from '../pages/home/store'
import {reducer as DetailReducer} from '../pages/detail/store'
export default combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer
})