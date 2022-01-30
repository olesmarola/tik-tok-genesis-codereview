import tw from 'twin.macro';
import { FC, MouseEvent } from 'react';

interface PlayButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  isPaused: boolean;
}

const Button = tw.button`absolute w-full inset-0 opacity-0 hover:opacity-100 transition-opacity transition-colors duration-300`;
const Svg = tw.svg`w-16 h-16 mx-auto text-gray-800 dark:text-gray-200 transition-colors duration-300`;
const Path = tw.path`fill-current`;

const PlayButton: FC<PlayButtonProps> = ({ onClick, isPaused }) => {
  return (
    <Button onClick={onClick}>
      {isPaused ? (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.148 494.148" xmlSpace="preserve">
          <Path d="M405.284 201.188 130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z" />
        </Svg>
      ) : (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.607 47.607" xmlSpace="preserve">
          <Path d="M17.991 40.976a6.631 6.631 0 0 1-13.262 0V6.631a6.631 6.631 0 0 1 13.262 0v34.345zM42.877 40.976a6.631 6.631 0 0 1-13.262 0V6.631a6.631 6.631 0 0 1 13.262 0v34.345z" />
        </Svg>
      )}
    </Button>
  );
};

export default PlayButton;
