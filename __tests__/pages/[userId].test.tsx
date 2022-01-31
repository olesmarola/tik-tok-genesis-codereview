import { render } from '@testing-library/react';

import UserPage from '../../pages/users/[userId]';

import userMock from '../../api/mocks/trending-feed.json';

it('renders news page unchanged', () => {
  const { container } = render(<UserPage userId={userMock[0].authorMeta.name} />);

  expect(container).toMatchSnapshot();
});
