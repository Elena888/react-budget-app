import { combineReducers } from 'redux'
import dataReducer from './calculateBudgetReducer'
import dateReducer from './getDateReducer'

export default combineReducers({
    data: dataReducer,
    currentDate: dateReducer
})