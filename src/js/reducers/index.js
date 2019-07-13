import { combineReducers } from 'redux';
import blog from './blogReducer';

const appReducer = combineReducers({
    blog
})

const rootReducer = ( state, action ) => {
        
    return appReducer(state, action)
}

export default rootReducer;