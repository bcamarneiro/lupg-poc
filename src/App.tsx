import { Button, Navbar, Page } from '@components';

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
      <Navbar />
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

      <Button
        className="absolute bottom-5 right-5"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle Dark Mode
      </Button>
    </div>
  );
}

export default App;
