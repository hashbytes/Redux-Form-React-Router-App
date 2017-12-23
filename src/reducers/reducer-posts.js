import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

const postsReducerInitialState = {}
export default (state = postsReducerInitialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return _.keyBy(action.payload.data, 'id');
        case FETCH_POST:
            return { ...postsReducerInitialState, [action.payload.data.id]: action.payload.data }
        case DELETE_POST:
            const newState = { ...postsReducerInitialState };
            delete newState[action.payload.id];
            return newState;
        default:
            return state
    }
}