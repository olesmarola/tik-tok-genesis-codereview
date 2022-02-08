import { FC } from 'react';
import tw from 'twin.macro';

interface AvatarProps {
  nickname: string;
  avatarThumb: string;
  size?: number;
}

const AvatarContainer = tw.div`rounded-full w-max sm:mr-2 flex items-center overflow-hidden border border-gray-200`;

const Avatar: FC<AvatarProps> = ({ nickname, avatarThumb, size = 64 }) => (
  <AvatarContainer data-testid="avatar">
    <img style={{width: size, height: size}} alt={nickname} src={avatarThumb} />
  </AvatarContainer>
);

export default Avatar;
