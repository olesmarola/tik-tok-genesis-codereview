import tw from 'twin.macro';
import { FC } from 'react';

import { User } from '../domain/user';
import InfoCard from './infoCard';
import Avatar from './avatar';

interface UserProfileProps {
  user: User;
}

const UserProfileContainer = tw.div`mt-12 mb-4 rounded-lg transition-colors duration-300 bg-gray-100 dark:bg-gray-600 max-w-2xl mx-auto px-4 py-2`;
const UserProfileInfoContainer = tw.div`flex items-center justify-between mb-2`;
const InfoCardsContainer = tw.div`grid gap-2 grid-cols-3`;
const Nickname = tw.p`text-2xl mb-1`;

const UserProfile: FC<UserProfileProps> = ({ user }) => {
  return (
    <UserProfileContainer>
      <UserProfileInfoContainer>
        <Avatar nickname={user.user.nickname} avatarThumb={user.user.avatarThumb} />
        <InfoCardsContainer>
          <InfoCard label="Videos" value={user.stats.videoCount} />
          <InfoCard label="Followers" value={user.stats.followerCount} />
          <InfoCard label="Followings" value={user.stats.followingCount} />
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
