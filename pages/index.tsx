import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';

const Home: FC = () => {
  const router = useRouter();

  useEffect(() => {
    void router.push('/news');
  }, []);

  return null;
};

export default Home;
