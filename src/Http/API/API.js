import { get, post, del } from '../Axios/ApiInvoke';

export const GetPosts = () => {
    return get('posts');
}

export const GetPost = (postId) => {
    return get('posts/' + postId);
}

export const AddNewPost = (postData) => {
    return post('posts', postData);
}

export const DeletePost = (postId) => {
    return del('posts/' + postId);
}