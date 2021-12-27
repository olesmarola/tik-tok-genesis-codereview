import 'twin.macro';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import { Post } from '../types/post';
import PostLayout from '../components/postLayout';
import axiosFetcher from '../lib/axiosFetcher';
import Loader from '../components/loader';

import { POST_LIMIT } from '../constants/news';

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
  let posts: Post[] = [];

  try {
    const response = await axios.get<Post[]>('/trending/feed', {
      params: { limit: POST_LIMIT, page: params?.page || 1 },
    });

    if (response.status === 200 && response.data.length) {
      posts = response.data;
    }
  } catch (e) {
    // TODO: add error handler
  }

  return {
    props: {
      posts,
      defaultPage: query?.page || 1,
    },
  };
};

interface NewsProps {
  posts: Post[];
  defaultPage: string;
}

const News: FC<NewsProps> = ({ posts, defaultPage }) => {
  const [page, setPage] = useState<string>(defaultPage);
  const router = useRouter();
  const { data } = useSWR<Post[]>(`/trending/feed?page=${page}&limit=${POST_LIMIT}`, axiosFetcher, {
    fallback: posts,
  });

  useEffect(() => {
    void router.push({ pathname: router.pathname, query: { page } }, undefined, { shallow: true });
  }, [page]);

  return (
    <>
      <Head>
        <title>Feeds</title>
      </Head>
      {!data ? (
        <Loader width={64} height={64} />
      ) : (
        <div tw="p-4 grid max-w-max gap-4 mx-auto">
          {data.map((p) => (
            <PostLayout post={p} key={p.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default News;
