import { render, screen } from '@testing-library/react';

import Avatar from '../../components/avatar';

describe('Avatar Component', () => {
  const nickname = 'Nick';
  const thumb =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+';

  it('renders avatar component', () => {
    render(<Avatar nickname={nickname} avatarThumb={thumb} />);

    expect(screen.getByAltText(nickname)).toBeInTheDocument();
  });

  it('have correct src attribute', () => {
    render(<Avatar nickname={nickname} avatarThumb={thumb} />);

    expect(screen.getByAltText(nickname)).toHaveAttribute('src', thumb);
  });
});
