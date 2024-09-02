import { Navbar } from '@components';

import styles from './App.module.css';
import clsx from 'clsx';
import { useState } from 'react';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={clsx(styles.app, 'bg-levelup-800 dark:bg-levelup-100')}>
      <Navbar toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
