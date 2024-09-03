import clsx from 'clsx';
import styles from './Toggle.module.css';
import { useState } from 'react';

type ToggleOption = {
  label: string;
  icon: (props?: { inverted?: boolean }) => React.ReactNode;
  value: string;
};
interface ToggleProps {
  options: ToggleOption[];
  onChange: (value: string) => void;
}

function Toggle({ options, onChange }: ToggleProps) {
  const [active, setActive] = useState(options[0].value);

  return (
    <div
      className={clsx(
        styles.wrapper,
        'border-levelup-200 dark:border-levelup-350',
        'bg-levelup-600 dark:bg-levelup-200',
      )}
    >
      {options.map((option) => (
        <div
          key={option.value}
          className={clsx(
            styles.toggleHandle,
            active === option.value ? 'bg-levelup-200 dark:bg-levelup-600' : 'bg-levelup-600 dark:bg-levelup-200',
          )}
          onClick={() => {
            setActive(option.value);
            onChange(option.value);
          }}
        >
          {option.icon({ inverted: active == option.value })}
          <span
            className={clsx(
              active === option.value
                ? 'text-levelup-600 dark:text-levelup-50'
                : 'text-levelup-200 dark:text-levelup-600',
              'leading-[1.875rem]',
              'hidden sm:inline-block',
            )}
          >
            {option.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Toggle;
