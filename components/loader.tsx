import tw from 'twin.macro';
import { FC } from 'react';

interface LoaderProps {
  width?: number;
  height?: number;
}

const LoaderContainer = tw.div`flex items-center justify-center m-24`;
const LoaderSvg = tw.svg`animate-spin text-gray-600 dark:(text-gray-400)`;
const LoaderCircle = tw.circle`opacity-25`;
const LoaderPath = tw.path`opacity-75`;

const Loader: FC<LoaderProps> = ({ width = 24, height = 24 }) => {
  return (
    <LoaderContainer data-testid="loader">
      <LoaderSvg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <LoaderCircle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <LoaderPath
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </LoaderSvg>
    </LoaderContainer>
  );
};

export default Loader;
