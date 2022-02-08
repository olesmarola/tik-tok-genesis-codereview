import tw from 'twin.macro';
import { FC } from 'react';
import { InfoCard } from '@olesmarola/oles-component-library';

import { User } from '../domain/user';
import Avatar from './avatar';
import useFormatter from '../helpers/hooks/useFormatter';

interface UserProfileProps {
  user: User;
}

const UserProfileContainer = tw.div`mt-12 mb-4 rounded-lg bg-gray-100 dark:bg-gray-600 max-w-2xl mx-auto px-4 py-2`;
const UserProfileInfoContainer = tw.div`flex items-center justify-between mb-2`;
const InfoCardsContainer = tw.div`grid gap-2 grid-cols-3`;
const Nickname = tw.p`text-2xl mb-1`;

const UserProfile: FC<UserProfileProps> = ({ user }) => {
  const formatter = useFormatter();

  return (
    <UserProfileContainer data-testid="user_profile">
      <UserProfileInfoContainer>
        <Avatar nickname={user.user.nickname} avatarThumb={user.user.avatarThumb} />
        <InfoCardsContainer>
          <InfoCard label="Videos" value={formatter.format(user.stats.videoCount)} />
          <InfoCard label="Followers" value={formatter.format(user.stats.followerCount)} />
          <InfoCard label="Followings" value={formatter.format(user.stats.followingCount)} />
        </InfoCardsContainer>
      </UserProfileInfoContainer>
      <div>
        <Nickname>{user.user.nickname}</Nickname>
        <p>{user.user.signature}</p>
      </div>
    </UserProfileContainer>
  );
};

export default UserProfile;
