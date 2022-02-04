import tw from 'twin.macro';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';

import PostLayout from '../components/postLayout';
import Loader from '../components/loader';
import { Post } from '../domain/post';
import getPosts from '../api/getPosts';

const TrendingFeedContainer = tw.div`mt-10 p-4 grid max-w-max gap-4 mx-auto dark:(bg-gray-800 text-gray-50)`;
const TrendingFeedHeading = tw.h1`text-4xl`;

const News: FC = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    getPosts()
      .then(({ posts: p }) => setPosts(p))
      .catch(() => setPosts([]));
  }, []);

  return (
    <>
      <Head>
        <title>Feeds</title>
      </Head>
      {!posts ? (
        <Loader width={64} height={64} />
      ) : (
        <TrendingFeedContainer>
          <TrendingFeedHeading>Trending Feed</TrendingFeedHeading>
          {posts.map((post) => (
            <PostLayout post={post} key={post.id} />
          ))}
        </TrendingFeedContainer>
      )}
    </>
  );
};

export default News;
