import 'twin.macro';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { Post } from '../domain/post';
import PostLayout from '../components/postLayout';
import Loader from '../components/loader';
import usePosts from '../api/hooks/usePosts';
import getPosts from '../api/getPosts';

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
  let postsFallback: Post[] = [];

  try {
    const { status, posts } = await getPosts({ page: params?.page as string | undefined });

    if (status === 200 && posts.length) {
      postsFallback = posts;
    }
  } catch (e) {
    // TODO: add error handler
  }

  return {
    props: {
      postsFallback,
      defaultPage: query?.page || '1',
    },
  };
};

interface NewsProps {
  postsFallback: Post[];
  defaultPage: string;
}

const News: FC<NewsProps> = ({ postsFallback, defaultPage }) => {
  const [page, setPage] = useState<string>(defaultPage);
  const router = useRouter();
  const { posts } = usePosts({ fallback: postsFallback, page });

  useEffect(() => {
    void router.push({ pathname: router.pathname, query: { page } }, undefined, { shallow: true });
  }, [page]);

  return (
    <>
      <Head>
        <title>Feeds</title>
      </Head>
      {!posts ? (
        <Loader width={64} height={64} />
      ) : (
        <div tw="p-4 grid max-w-max gap-4 mx-auto">
          {posts.map((post) => (
            <PostLayout post={post} key={post.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default News;
