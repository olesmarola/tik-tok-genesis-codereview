import axios from 'axios';

import { Post } from '../domain/post';

import { POST_LIMIT } from './constants/news';
import { TRENDING_FEEDS_URL } from './constants/feeds';

import posts from './mocks/trending-feed.json';

const getPosts = async () => {
  try {
    const response = await axios.get<Post[]>(TRENDING_FEEDS_URL, {
      params: { limit: POST_LIMIT },
    });

    return { status: response.status, posts: response.data };
  } catch (_) {
    return { status: 200, posts };
  }
};

export default getPosts;
