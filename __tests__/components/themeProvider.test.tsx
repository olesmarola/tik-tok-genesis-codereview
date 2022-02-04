import { render, screen } from '@testing-library/react';

import ThemeProvider from '../../components/themeProvider';

describe('ThemeProvider Component', () => {
  it('should render header', function () {
    render(<ThemeProvider />);

    expect(screen.getByLabelText(/switch theme/i)).toBeInTheDocument();
  });

  it('should render children', function () {
    render(<ThemeProvider children={'Hello!'} />);

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
