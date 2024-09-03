import { useDarkMode } from '@hooks/DarkModeContext';
import { useMemo } from 'react';

export function List({ inverted }: { inverted?: boolean }) {
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
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.78125 2.0625C3.78125 1.59651 4.15901 1.21875 4.625 1.21875H14.75C15.216 1.21875 15.5938 1.59651 15.5938 2.0625C15.5938 2.52849 15.216 2.90625 14.75 2.90625H4.625C4.15901 2.90625 3.78125 2.52849 3.78125 2.0625Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.78125 6C3.78125 5.53401 4.15901 5.15625 4.625 5.15625H14.75C15.216 5.15625 15.5938 5.53401 15.5938 6C15.5938 6.46599 15.216 6.84375 14.75 6.84375H4.625C4.15901 6.84375 3.78125 6.46599 3.78125 6Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.78125 9.9375C3.78125 9.47151 4.15901 9.09375 4.625 9.09375H14.75C15.216 9.09375 15.5938 9.47151 15.5938 9.9375C15.5938 10.4035 15.216 10.7812 14.75 10.7812H4.625C4.15901 10.7812 3.78125 10.4035 3.78125 9.9375Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.6875 2.0625C0.6875 1.44118 1.19118 0.9375 1.8125 0.9375C2.43382 0.9375 2.9375 1.44118 2.9375 2.0625C2.9375 2.68382 2.43382 3.1875 1.8125 3.1875C1.19118 3.1875 0.6875 2.68382 0.6875 2.0625Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.6875 6C0.6875 5.37868 1.19118 4.875 1.8125 4.875C2.43382 4.875 2.9375 5.37868 2.9375 6C2.9375 6.62132 2.43382 7.125 1.8125 7.125C1.19118 7.125 0.6875 6.62132 0.6875 6Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.6875 9.9375C0.6875 9.31618 1.19118 8.8125 1.8125 8.8125C2.43382 8.8125 2.9375 9.31618 2.9375 9.9375C2.9375 10.5588 2.43382 11.0625 1.8125 11.0625C1.19118 11.0625 0.6875 10.5588 0.6875 9.9375Z"
        fill={color}
      />
    </svg>
  );
}
