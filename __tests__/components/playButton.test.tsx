import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PlayButton from '../../components/playButton';

const onClick = jest.fn();
const isPaused = false;

describe('PlayButton Component', () => {
  it('should render component', function () {
    render(<PlayButton onClick={onClick} isPaused={isPaused} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show play icon', function () {
    render(<PlayButton onClick={onClick} isPaused={isPaused} />);

    expect(screen.getByTestId('play_button_pause')).toBeInTheDocument();
    expect(screen.queryByTestId('play_button_play')).toBeNull();
  });

  it('should show pause icon', function () {
    render(<PlayButton onClick={onClick} isPaused={!isPaused} />);

    expect(screen.getByTestId('play_button_play')).toBeInTheDocument();
    expect(screen.queryByTestId('play_button_pause')).toBeNull();
  });

  it('should switch icon on click', function () {
    render(<PlayButton onClick={onClick} isPaused={isPaused} />);

    userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
