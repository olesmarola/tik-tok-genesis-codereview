import tw from 'twin.macro';
import { FC } from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';

import { Post } from '../domain/post';
import Avatar from './avatar';
import VideoPlayer from './videoPlayer';

interface PostProps {
  post: Post;
}

const PostContainer = tw.div`transition-colors duration-300 bg-gray-200 dark:bg-gray-600 rounded-xl overflow-hidden h-[calc(100vh - 2rem)] flex flex-col`;
const UserInfoContainerLink = tw.a`flex items-center justify-between px-4 py-2 mb-2 hover:bg-gray-500 transition-colors duration-500`;
const PostInfoContainer = tw.div`mt-2 px-4`;
const PostInfoDesc = tw.p`text-lg mb-2`;
const Nickname = tw.h2`text-xl`;
const PostHashtagsContainer = tw.div`flex flex-wrap gap-2 py-2`;
const Hashtag = tw.div`text-sm px-[.25rem] py-[.125rem] bg-gray-300 dark:bg-gray-700 rounded-lg transition-colors duration-300`;

const PostLayout: FC<PostProps> = ({ post }) => {
  return (
    <PostContainer>
      <Link passHref href={`/users/${post.authorMeta.name}`}>
        <UserInfoContainerLink>
          <Avatar
            size={48}
            nickname={post.authorMeta.nickName}
            avatarThumb={post.authorMeta.avatar}
          />
          <Nickname>{post.authorMeta.nickName}</Nickname>
        </UserInfoContainerLink>
      </Link>
      <VideoPlayer
        src={post.videoUrl}
        videoMeta={post.videoMeta}
        likes={post.commentCount}
        comments={post.diggCount}
      />
      <PostInfoContainer style={{ maxWidth: post.videoMeta.width }}>
        {post.text && <PostInfoDesc>{post.text}</PostInfoDesc>}
        {post.hashtags.length > 0 && (
          <PostHashtagsContainer>
            {post.hashtags.map((ht) => (
              <Hashtag key={ht.id + nanoid()}>{'#' + ht.name}</Hashtag>
            ))}
          </PostHashtagsContainer>
        )}
      </PostInfoContainer>
    </PostContainer>
  );
};

export default PostLayout;
