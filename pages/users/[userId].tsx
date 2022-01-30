import tw from 'twin.macro';
import { FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { User } from '../../domain/user';
import UserProfile from '../../components/userProfile';
import Loader from '../../components/loader';
import UserPost from '../../components/userPost';
import getUser from '../../api/getUser';
import useUserFeeds from '../../api/hooks/useUserFeeds';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.userId) {
    return Promise.resolve({
      notFound: true,
    });
  }

  return Promise.resolve({
    props: {
      userId: params.userId,
    },
  });
};

interface UserPageProps {
  userId: string;
}

const UserFeedsContainer = tw.div`grid gap-4 max-w-2xl mx-auto`;
const UserFeedsEmptyMessage = tw.p`font-bold text-center py-4 text-2xl`;

const UserPage: FC<UserPageProps> = ({ userId }) => {
  const [user, setUser] = useState<User>();
  const { feeds } = useUserFeeds({ userId });

  useEffect(() => {
    getUser({ userId })
      .then(({ user: u }) => setUser(u))
      .catch(() => {});
  }, []);

  return (
    <>
      <Head>
        <title>{user?.user.nickname || 'User Account'}</title>
      </Head>
      {user ? <UserProfile user={user} /> : <Loader width={64} height={64} />}
      <UserFeedsContainer>
        {feeds ? (
          feeds.length ? (
            feeds.map((feed) => <UserPost key={feed.id} post={feed} />)
          ) : (
            <UserFeedsEmptyMessage>This user haven&apos;t any post yet</UserFeedsEmptyMessage>
          )
        ) : (
          <Loader width={64} height={64} />
        )}
      </UserFeedsContainer>
    </>
  );
};

export default UserPage;
