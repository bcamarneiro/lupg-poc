import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import clsx from 'clsx';
import { Button } from '@components';

import logo from '@assets/logo.svg';
import { ROUTES } from '@routes';

interface NavbarProps {
  toggleDarkMode: () => void;
}

function Navbar({ toggleDarkMode }: NavbarProps) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div
      id="navbar"
      className={clsx(styles.wrapper, 'bg-levelup-600 dark:bg-levelup-200')}
    >
      <div className={styles.logo}>
        <img
          src={logo}
          className="logo"
          alt="Level Up Gaming logo"
        />
      </div>
      <nav className={styles.navbar}>
        {ROUTES.map((route) => (
          <Link
            key={route.path}
            className={clsx(
              pathname === route.path && '!text-yelevelup-100 !dark:text-yelevelup-50',
              styles.navbarItem,
              'transition-colors text-levelup-400 hover:text-levelup-300',
              'dark:text-levelup-500  dark:hover:text-yelevelup-100',
            )}
            to={route.path}
          >
            {route.name}
          </Link>
        ))}
      </nav>
      <div className={styles.actions}>
        <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
        <Button onClick={() => alert('NOT READY YET')}>View Cart</Button>
      </div>
    </div>
  );
}

export default Navbar;
