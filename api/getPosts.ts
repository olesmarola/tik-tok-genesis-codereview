import posts from './mocks/trending-feed.json';

const getPosts = () => {
  return { status: 200, posts };
};

export default getPosts;
