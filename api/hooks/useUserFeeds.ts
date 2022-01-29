import useSWR from 'swr';

import { UserFeed } from '../../domain/user';

import { POST_LIMIT } from '../constants/news';
import { USER_FEEDS_URL } from '../constants/user';

interface UseUserFeedsProps {
  userId: string;
  page: string;
}

const useUserFeeds = ({ userId, page }: UseUserFeedsProps) => {
  const { data } = useSWR<UserFeed[]>(
    `${USER_FEEDS_URL}/${userId}?page=${page}&limit=${POST_LIMIT}`
  );

  return { feeds: data };
};

export default useUserFeeds;
