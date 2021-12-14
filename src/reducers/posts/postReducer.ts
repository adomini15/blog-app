import {Post} from "../../types/Post";
import {PostActions} from "../../actions/postActions";
import {Reducer} from "redux";

const initialState: {
    posts: Post[],
    pages: Number,
    error: any,
    loading: boolean
} = {
    posts: [],
    pages: 0,
    error: null,
    loading: false,
}

export const postReducer: Reducer = (state = initialState, action) => {

    switch (action.type) {
        case PostActions.GET_POSTS_REQUEST:
            return {...state, loading: true};
        case PostActions.GET_POSTS_SUCCESS:
            return {...state, posts: action.payload.posts, pages: action.payload.pages, loading: false}
        case PostActions.GET_POSTS_FAILED:
            return {...state, error: action.payload.error, loading: false}
        default:
            return 'Action Not Found'
    }
}