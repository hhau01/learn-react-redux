import _ from 'lodash';
import {
    FETCH_POSTS,
    DELETE_POSTS,
    CREATE_POSTS
} from './types';

const INITIAL_POSTS = { 123: 'One Weird Trick...', 456: 'Read this now!'};

export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: INITIAL_POSTS
    };
}

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: { [_.uniqueId()]: post }
    };
}