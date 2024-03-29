import tw from 'twin.macro';
import { FC } from 'react';

import useFormatter from '../helpers/hooks/useFormatter';

interface SocialProps {
  likes?: number;
  comments?: number;
}

const SocialContainer = tw.div`absolute right-2 top-1/2 -translate-y-1/2`;
const SocialContainerItems = tw.div`flex gap-1 flex-col items-center mb-2`;

const Svg = tw.svg`w-8 h-8 text-gray-800 dark:text-gray-200 transition-colors duration-300`;
const Path = tw.path`fill-current`;

const Social: FC<SocialProps> = ({ likes = 0, comments = 0 }) => {
  const formatter = useFormatter();

  return (
    <SocialContainer data-testid="social_container">
      <SocialContainerItems>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.997 51.997" xmlSpace="preserve">
          <Path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477z" />
        </Svg>
        <p>{formatter.format(likes)}</p>
      </SocialContainerItems>
      <div tw="flex flex-col items-center">
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="796 796 200 200" xmlSpace="preserve">
          <Path d="M975.75 934.625c12.294-9.564 19.785-22.222 19.785-36.109 0-19.273-14.406-36.179-36.08-45.737a2.048 2.048 0 0 0-2.241.391 2.048 2.048 0 0 0-.503 2.219 48.588 48.588 0 0 1 3.233 17.423c0 17.555-9.428 33.831-26.548 45.825-16.112 11.289-37.368 17.507-59.853 17.507-1.155 0-2.311-.019-3.466-.055a2.052 2.052 0 0 0-1.102 3.82c13.386 7.87 30.638 12.614 49.48 12.614 5.342 0 10.555-.388 15.591-1.117a12.139 12.139 0 0 1 8.502 1.939l28.448 19.119a4.33 4.33 0 0 0 4.855-.018 4.325 4.325 0 0 0 1.783-4.514l-5.296-23.836a9.427 9.427 0 0 1 3.412-9.471z" />
          <Path d="M873.544 818.801c-42.571 0-77.079 24.179-77.079 54.01 0 13.888 7.491 26.546 19.785 36.112a9.422 9.422 0 0 1 3.41 9.471l-5.297 23.836a4.328 4.328 0 0 0 6.64 4.532l28.449-19.119a12.133 12.133 0 0 1 8.503-1.938 108.847 108.847 0 0 0 15.59 1.115c42.568 0 77.077-24.179 77.077-54.007-.001-29.834-34.51-54.012-77.078-54.012z" />
        </Svg>
        <p>{formatter.format(comments)}</p>
      </div>
    </SocialContainer>
  );
};

export default Social;
