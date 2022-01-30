import useSWR from 'swr';

import { UserFeed } from '../../domain/user';

import { POST_LIMIT } from '../constants/news';
import { USER_FEEDS_URL } from '../constants/user';

import feeds from '../mocks/user-feed.json';

interface UseUserFeedsProps {
  userId: string;
}

const useUserFeeds = ({ userId }: UseUserFeedsProps) => {
  const { data, error } = useSWR<UserFeed[], Error>(
    `${USER_FEEDS_URL}/${userId}?&limit=${POST_LIMIT}`
  );

  if (error) {
    return { feeds };
  }

  return { feeds: data };
};

export default useUserFeeds;
