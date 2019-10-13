import { combineReducers } from 'redux';
import listCatigory from './list-catigory'
import listMovie from './list-movie';

const AllReducers = combineReducers({
    listcategory: listCatigory,
    listmovie: listMovie
})
export default AllReducers;