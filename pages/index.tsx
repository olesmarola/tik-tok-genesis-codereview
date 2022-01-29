import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = () =>
  Promise.resolve({
    redirect: {
      permanent: true,
      destination: '/news',
    },
  });

const Home: NextPage = () => null;

export default Home;
