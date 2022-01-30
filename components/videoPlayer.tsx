import tw from 'twin.macro';
import { FC, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Loader from './loader';
import PlayButton from './playButton';
import { VideoMeta } from '../domain/post';
import Social from './social';
import useFormatter from '../helpers/hooks/useFormatter';

interface VideoPlayerProps {
  poster?: string;
  src: string;
  videoMeta?: VideoMeta;
  likes?: number;
  comments?: number;
  views?: number;
}

const VideoPlayerContainer = tw.div`relative w-full h-full`;
const ViewsCountContainer = tw.div`absolute left-2 top-1 rounded-lg transition-colors duration-300 bg-gray-200 dark:bg-gray-500 px-[.25rem] py-[.125rem]`;
const Video = tw.video`block w-full h-full object-contain absolute inset-0`;
const LoaderContainer = tw.div`absolute inset-0 flex items-center justify-center`;

const VideoPlayer: FC<VideoPlayerProps> = ({ src, poster, videoMeta, likes, comments, views }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null!);
  const formatter = useFormatter();
  const { inView, ref } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (!isLoading) {
      setIsPaused(!inView);
    }

    if (!inView) {
      videoRef.current.currentTime = 0;
    }
  }, [inView, isLoading]);

  useEffect(() => {
    if (isPaused) {
      void videoRef.current.pause();
    } else {
      void videoRef.current.play();
    }
  }, [isPaused]);

  return (
    <VideoPlayerContainer ref={ref}>
      {views && <ViewsCountContainer>Views: {formatter.format(views)}</ViewsCountContainer>}
      <Video
        ref={videoRef}
        loop
        onLoadStart={setIsLoading.bind(null, true)}
        onLoadedData={setIsLoading.bind(null, false)}
        poster={poster}
        width={videoMeta?.width}
      >
        <source src={src} type={'video/mp4'} />
      </Video>
      {isLoading && (
        <LoaderContainer>
          <Loader width={64} height={64} />
        </LoaderContainer>
      )}
      <PlayButton onClick={setIsPaused.bind(null, !isPaused)} isPaused={isPaused} />
      <Social likes={likes} comments={comments} />
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
