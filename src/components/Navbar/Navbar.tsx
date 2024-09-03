import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import clsx from 'clsx';
import { Button } from '@components';

import { ROUTES } from '@routes';
import MobileMenu from './MobileMenu';
import { Logo } from '@components';

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div
      id="navbar"
      className={clsx(styles.wrapper, 'bg-levelup-600 dark:bg-levelup-200')}
    >
      <div className={clsx(styles.innerWrapper)}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.navbar}>
          {ROUTES.map((route) => (
            <Link
              key={route.path}
              className={clsx(
                pathname === route.path && '!text-yelevelup-100 !dark:text-yelevelup-50 font-medium',
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
          <Button
            className="w-33"
            onClick={() => alert('NOT READY YET')}
          >
            View Cart
          </Button>
        </div>
        <div className={styles.mobileMenu}>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
