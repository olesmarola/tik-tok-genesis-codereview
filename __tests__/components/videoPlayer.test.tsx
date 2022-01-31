import { render, screen } from '@testing-library/react';
import '../../__mocks__/intersectionObserverMock';
import '../../__mocks__/HTMLMediaElementMock';

import VideoPlayer from '../../components/videoPlayer';

import postMock from '../../api/mocks/trending-feed.json';

const videoSrc = postMock[0].videoUrl;

describe('VideoPlayer Component', () => {
  it('should render component', function () {
    render(<VideoPlayer src={videoSrc} />);

    expect(screen.getByTestId('video_player')).toBeInTheDocument();
  });

  it('should have a video src', function () {
    render(<VideoPlayer src={videoSrc} />);

    expect(screen.getByTestId('video_source')).toHaveAttribute('src', videoSrc);
  });
});
