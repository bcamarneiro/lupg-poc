import { Button, Navbar, Page } from '@components';

import styles from './App.module.css';
import clsx from 'clsx';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@routes';
import { useDarkMode } from '@hooks/DarkModeContext';
function App() {
  const { toggleDarkMode } = useDarkMode();

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
        className="absolute bottom-16 -right-[40px] rotate-90 bg-levelup-800 dark:bg-levelup-100"
        onClick={() => toggleDarkMode()}
      >
        Toggle Dark Mode
      </Button>
    </div>
  );
}

export default App;
