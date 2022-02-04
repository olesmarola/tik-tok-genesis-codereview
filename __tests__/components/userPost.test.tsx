import { render, screen } from '@testing-library/react';
import '../../__mocks__/intersectionObserverMock';
import '../../__mocks__/HTMLMediaElementMock';

import UserPost from '../../components/userPost';

import postMock from '../../api/mocks/user-feed.json';

const post = postMock[0];

describe('UserPost Component', () => {
  it('should render a component', function () {
    render(<UserPost post={post} />);

    expect(screen.getByTestId('user_post')).toBeInTheDocument();
  });

  it('should have a views count', function () {
    render(<UserPost post={post} />);

    expect(screen.getByText(/views:/i)).toHaveTextContent('Views: 2M');
  });

  it('should have a video src', function () {
    render(<UserPost post={post} />);

    expect(screen.getByTestId('video_source')).toHaveAttribute('src', post.video.playAddr);
  });
});
