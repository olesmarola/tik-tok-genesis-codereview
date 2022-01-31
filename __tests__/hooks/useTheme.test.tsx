import { renderHook, act } from '@testing-library/react-hooks';

import useTheme from '../../helpers/hooks/useTheme';

describe('useTheme hook', () => {
  it('should switch theme', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.isDarkTheme).toBe(false);

    act(() => {
      result.current.setIsDarkTheme(true);
    })

    expect(result.current.isDarkTheme).toBe(true);
  });
});
