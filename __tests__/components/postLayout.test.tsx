import { render, screen } from '@testing-library/react';
import '../../__mocks__/intersectionObserverMock'
import '../../__mocks__/HTMLMediaElementMock'

import PostLayout from '../../components/postLayout';

import postMock from '../../api/mocks/trending-feed.json';

const post = postMock[0];

describe('PostLayout Component', () => {
  it('should render component', function () {
    render(<PostLayout post={post} />);

    expect(screen.getByTestId('post_layout')).toBeInTheDocument();
  });

  it('should show nickname', function () {
    render(<PostLayout post={post} />);

    expect(screen.getByRole('heading')).toHaveTextContent('Kika Kim');
  });

  it('should have a avatar', function () {
    render(<PostLayout post={post} />);

    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('should have a user account link with correct href', function () {
    render(<PostLayout post={post} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/users/${post.authorMeta.name}`);
  });

  it('should have a video src', function () {
    render(<PostLayout post={post} />);

    expect(screen.getByTestId('video_source')).toHaveAttribute('src', post.videoUrl);
  });

  it('should have a post desc', function () {
    render(<PostLayout post={post} />);

    expect(screen.getByText(post.text)).toHaveTextContent(post.text);
  });

  it('should not have a hashtags', function () {
    render(<PostLayout post={post} />);

    expect(screen.queryByRole('list')).toBeNull();
  });
});
