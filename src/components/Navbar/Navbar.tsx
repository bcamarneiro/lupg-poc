import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import clsx from 'clsx';

interface NavbarProps {
  toggleDarkMode: () => void;
}

const ROUTES = [
  {
    name: 'Store',
    path: '/',
  },
  {
    name: 'Reviews',
    path: '/reviews',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Media',
    path: '/media',
  },
  {
    name: 'Locations',
    path: '/locations',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

function Navbar({ toggleDarkMode }: NavbarProps) {
  return (
    <div
      id="navbar"
      className={clsx(styles.wrapper, 'bg-levelup-700 dark:bg-levelup-200')}
    >
      <div className={styles.logo}>
        <img
          src="../../assets/logo.svg"
          alt="Logo"
        />
      </div>
      <nav className={styles.navbar}>
        {ROUTES.map((route) => (
          <Link
            key={route.path}
            className={clsx(
              styles.navbarItem,
              'transition-colors text-levelup-100 dark:text-levelup-700 hover:text-levelup-300 dark:hover:text-levelup-500',
            )}
            to={route.path}
          >
            {route.name}
          </Link>
        ))}
      </nav>
      <div className={styles.actions}>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <button onClick={() => alert('NOT READY YET')}>View Cart</button>
      </div>
    </div>
  );
}

export default Navbar;
