import { combineReducers } from 'redux'
import items from './items'
import taxRate from './taxRate'

export default combineReducers({
    items,
    taxRate
});