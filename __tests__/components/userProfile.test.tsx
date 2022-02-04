import { render, screen } from '@testing-library/react';

import UserProfile from '../../components/userProfile';

import userMock from '../../api/mocks/user-info.json';

describe('UserProfile Component', () => {
  it('should render component', function () {
    render(<UserProfile user={userMock} />);

    expect(screen.getByTestId('user_profile')).toBeInTheDocument();
  });
});
