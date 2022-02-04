import { render, screen } from '@testing-library/react';

import Loader from '../../components/loader';

describe('Loader Component', () => {
  it('renders loader component', () => {
    render(<Loader />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
