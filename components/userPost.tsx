import { FC } from 'react';
import tw from 'twin.macro';

import { UserFeed } from '../domain/user';
import VideoPlayer from './videoPlayer';

interface UserPostProps {
  post: UserFeed;
}

const UserPostContainer = tw.div`min-h-[calc(100vh - 12.375rem)] rounded-xl drop-shadow transition-colors duration-300 bg-gray-200 dark:bg-gray-600 p-2 sm:mx-4 md:mx-0`;

const UserPost: FC<UserPostProps> = ({ post }) => {
  return (
    <UserPostContainer>
      <VideoPlayer
        views={post.stats.playCount}
        src={post.video.playAddr}
        poster={post.video.cover}
        videoMeta={{
          width: post.video.width,
          height: post.video.height,
          duration: post.video.duration,
        }}
        likes={post.stats.diggCount}
        comments={post.stats.commentCount}
      />
    </UserPostContainer>
  );
};

export default UserPost;
