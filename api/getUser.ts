import axios from 'axios';

import { User } from '../domain/user';

import { USER_INFO_URL } from './constants/user';

interface GetUserProps {
  userId: string;
}

const getUser = async ({ userId }: GetUserProps) => {
  const response = await axios.get<User>(`${USER_INFO_URL}/${userId}`);

  return { status: response.status, user: response.data };
};

export default getUser;
