import axios from 'axios';

import { Post } from '../domain/post';

import { POST_LIMIT } from './constants/news';
import { FEEDS_URL } from './constants/feeds';

interface GetPostsProps {
  page?: string;
}

const getPosts = async ({ page }: GetPostsProps) => {
  const response = await axios.get<Post[]>(FEEDS_URL, {
    params: { limit: POST_LIMIT, page: page || 1 },
  });

  return { status: response.status, posts: response.data };
};

export default getPosts;
