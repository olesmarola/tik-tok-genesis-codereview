import user from './mocks/user-info.json';

interface GetUserProps {
  userId: string;
}

const getUser = ({ userId }: GetUserProps) => {
  return { status: 200, user };
};

export default getUser;
