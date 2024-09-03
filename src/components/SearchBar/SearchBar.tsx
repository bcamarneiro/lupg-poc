import { Magnifier } from '@components/Icons';
import { clsx } from 'clsx';
import { ChangeEventHandler } from 'react';

import styles from './SearchBar.module.css';

interface SearchBarProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

function SearchBar({ onChange, className = '' }: SearchBarProps) {
  return (
    <div className={clsx(className, 'relative')}>
      <div className={clsx(styles.icon, 'left-1')}>
        <Magnifier />
      </div>

      <input
        type="search"
        id="search"
        className={clsx(
          styles.input,
          'bg-levelup-600 dark:bg-levelup-200',
          'border-levelup-200 dark:border-levelup-350',
          'text-levelup-200 dark:text-levelup-500',
        )}
        placeholder="Search..."
        onChange={onChange}
      />
    </div>
  );
}
export default SearchBar;
