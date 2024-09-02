import { Navbar, Page } from '@components';

import styles from './App.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@routes';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={clsx(styles.app, 'bg-levelup-800 dark:bg-levelup-100 text-levelup-50 dark:text-levelup-900')}>
      <Navbar toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <Page>
        <Routes>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Page>
    </div>
  );
}

export default App;
