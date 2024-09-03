import { useDarkMode } from '@hooks/DarkModeContext';
import { useMemo } from 'react';

export function Burger({ inverted }: { inverted?: boolean }) {
  const { isDarkMode } = useDarkMode();

  const color = useMemo(() => {
    if (isDarkMode) {
      return inverted ? '#000' : '#A1A1A1';
    } else {
      return inverted ? '#A1A1A1' : '#000000';
    }
  }, [isDarkMode, inverted]);

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18L20 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
