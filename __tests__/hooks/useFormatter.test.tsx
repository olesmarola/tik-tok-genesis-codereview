import { renderHook, act } from '@testing-library/react-hooks';

import useFormatter from '../../helpers/hooks/useFormatter';

describe('useFormatter hook', () => {
  it('should return a function', () => {
    const { result } = renderHook(() => useFormatter());

    expect(typeof result.current.format).toBe('function');
  });

  it('should return a formatted value', () => {
    let formattedValue;
    const { result } = renderHook(() => useFormatter());

    act(() => {
      formattedValue = result.current.format(3000000);
    });

    expect(formattedValue).toBe('3M');
  });
});
