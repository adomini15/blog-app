import {call, put, takeEvery} from 'redux-saga/effects'
import {BlogService} from "../services/BlogService";
import {PostActions} from "../actions/postActions";

const blogService: BlogService = BlogService.Instance();

function* handleFetchPosts(action: any) : any {
    try {
        let headers: any;
        const posts = yield call(blogService.getAll,
            { page: action.payload.page, per_page: 5 } ,
            (h: any) => headers = h);

        yield put({
            type:PostActions.GET_POSTS_SUCCESS,
            payload: {
                posts,
                pages: headers['x-wp-totalpages']
            }
        })
    } catch (e: any) {
        yield put({
            type: PostActions.GET_POSTS_FAILED,
            payload: {
                error:  e.message
            }
        })
    }
}

export function* watcherPostSaga () {
    yield takeEvery(PostActions.GET_POSTS_REQUEST, handleFetchPosts)
}


