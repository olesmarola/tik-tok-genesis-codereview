import { render } from '@testing-library/react';

import News from '../../pages/news';

describe('News Page', () => {
  it('renders news page unchanged', () => {
    const { container } = render(<News />);

    expect(container).toMatchSnapshot();
  });
});
