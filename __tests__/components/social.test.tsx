import { render, screen } from '@testing-library/react';

import Social from '../../components/social';

describe('Social Component', () => {
  it('should render a component', function () {
    render(<Social />);

    expect(screen.getByTestId('social_container')).toBeInTheDocument();
  });

  it('should show correct likes', function () {
    render(<Social likes={100} />);

    const likesParagraph = screen.getByText('100');

    expect(likesParagraph).toBeInTheDocument();
    expect(likesParagraph).toHaveTextContent('100');
  });

  it('should show correct comments', function () {
    render(<Social comments={1} />);

    const commentsParagraph = screen.getByText('1');

    expect(commentsParagraph).toBeInTheDocument();
    expect(commentsParagraph).toHaveTextContent('1');
  });
});
