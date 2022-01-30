import axios from 'axios';

import { User } from '../domain/user';

import { USER_INFO_URL } from './constants/user';

import user from './mocks/user-info.json';

interface GetUserProps {
  userId: string;
}

const getUser = async ({ userId }: GetUserProps) => {
  try {
    const response = await axios.get<User>(`${USER_INFO_URL}/${userId}`);

    return { status: response.status, user: response.data };
  } catch (_) {
    return { status: 200, user };
  }
};

export default getUser;
