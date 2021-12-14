// hook
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {PostActions} from "../actions/postActions";

export const usePosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state:any) => {
        return state.posts;
    });
    const error = useSelector((state:any) => state.error);
    const loading = useSelector((state:any) => state.loading);
    const pages = useSelector((state: any) => state.pages)
    const [selectedPage, setSelectedPage]  = useState(1);

    // when component is mounted
    useEffect(() => {
        dispatch({type:PostActions.GET_POSTS_REQUEST, payload: {
                page: selectedPage
            }});
    }, [selectedPage]);

    return {
        posts,
        error,
        loading,
        pages,
        setSelectedPage,
        selectedPage
    }
}