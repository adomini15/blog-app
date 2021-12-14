import {Post} from "../types/Post";
// import axios from "axios";
import { Http } from "@capacitor-community/http/"

export class BlogService {
    private static instance: BlogService;
    private static API_URL: string = "https://joangregorioperez.com/wp-json/wp/v2";

    private constructor() {}

    public static Instance() {
        if (!BlogService.instance) {
            BlogService.instance = new BlogService();
        }

        return BlogService.instance;
    }

    async getAll (filter: { per_page: number, page: number } = { per_page: 5, page: 2 }, callbackHeaders?: Function) : Promise<Post[]> {
         try {
             const res = await Http.get({
                 url:`${BlogService.API_URL}/posts`,
                 params: {
                     page: String(filter.page),
                     per_page: String(filter.per_page)
                 }
             });

             const posts: Post[] = res.data.map((post: any) => {
                 return {
                     id: post.id,
                     title: post.title.rendered,
                     content: post.content.rendered,
                     excerpt: post.excerpt.rendered,
                     thumbnailURL: post.jetpack_featured_media_url,
                     createdAt: new Date(post.date),
                     updatedAt: new Date(post.modified)
                 } as Post
             });

             callbackHeaders && callbackHeaders(res.headers)
             return (posts);
         } catch (err) {
            throw err;
         }
    }
}