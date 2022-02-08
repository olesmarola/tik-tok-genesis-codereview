import feeds from '../mocks/user-feed.json';

interface UseUserFeedsProps {
  userId: string;
}

const useUserFeeds = ({ userId }: UseUserFeedsProps) => {
    return { feeds };
  };

export default useUserFeeds;
