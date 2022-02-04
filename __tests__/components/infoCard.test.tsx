import { render, screen } from '@testing-library/react';

import InfoCard from '../../components/infoCard';

describe('InfoCard Component', () => {
  const label = 'Label';
  const value = 3000000;

  it('renders card component', () => {
    render(<InfoCard label={label} value={value} />);

    expect(screen.getByTestId('user_info_card')).toBeInTheDocument();
  });

  it('to have a correct label', () => {
    render(<InfoCard label={label} value={value} />);

    expect(screen.getByRole('heading')).toHaveTextContent(/label/i);
  });

  it('to have a correct value', () => {
    render(<InfoCard label={label} value={value} />);

    expect(screen.getByTestId('info_card_value')).toHaveTextContent(/3M/i);
  });
});
