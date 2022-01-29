import useSWR from 'swr';

import { Post } from '../../domain/post';
import axiosFetcher from '../fetchers/axiosFetcher';

import { POST_LIMIT } from '../constants/news';
import { FEEDS_URL } from '../constants/feeds';

interface UsePostsProps {
  fallback: Post[];
  page: string;
}

const usePosts = ({ fallback, page }: UsePostsProps) => {
  const { data } = useSWR<Post[]>(`${FEEDS_URL}?page=${page}&limit=${POST_LIMIT}`, axiosFetcher, {
    fallback,
  });

  return { posts: data };
};

export default usePosts;
