import 'twin.macro';
import { FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { User } from '../../domain/user';
import UserProfile from '../../components/userProfile';
import Loader from '../../components/loader';
import UserPost from '../../components/userPost';
import getUser from '../../api/getUser';
import useUserFeeds from '../../api/hooks/useUserFeeds';

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
  if (!params?.userId) {
    return {
      notFound: true,
    };
  }

  let userData;

  try {
    const { status, user } = await getUser({ userId: params.userId as string });

    if (status === 200 && user) {
      userData = user;
    }
  } catch (e) {
    // TODO: add error handler
  }

  return {
    props: {
      defaultPage: query.page || '1',
      userId: params.userId,
      user: userData,
    },
  };
};

interface UserPageProps {
  userId: string;
  user: User;
  defaultPage: string;
}

const UserPage: FC<UserPageProps> = ({ user, userId, defaultPage }) => {
  const [page, setPage] = useState<string>(defaultPage);
  const router = useRouter();
  const { feeds } = useUserFeeds({ userId, page });

  useEffect(() => {
    void router.push({ pathname: router.pathname, query: { page } }, undefined, { shallow: true });
  }, [page]);

  return (
    <>
      <Head>
        <title>{user?.user.nickname || 'User Account'}</title>
      </Head>
      <UserProfile user={user} />
      <div tw="grid gap-4 max-w-2xl mx-auto">
        {feeds ? (
          feeds.length ? (
            feeds.map((feed) => <UserPost key={feed.id} post={feed} />)
          ) : (
            <p tw="font-bold text-center py-4 text-2xl">This user haven&apos;t any post yet</p>
          )
        ) : (
          <Loader width={64} height={64} />
        )}
      </div>
    </>
  );
};

export default UserPage;
