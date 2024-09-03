import { Burger } from '@components/Icons';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ROUTES } from '@routes';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

import styles from './MobileMenu.module.css';

function MobileMenu() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Menu>
      <MenuButton className={'size-10 flex items-center justify-center'}>
        <Burger />
      </MenuButton>
      <nav>
        <MenuItems
          anchor="bottom"
          className={clsx('flex flex-col', 'bg-levelup-600 dark:bg-levelup-200 p-4')}
        >
          {ROUTES.map((route) => (
            <MenuItem key={route.path}>
              <Link
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
            </MenuItem>
          ))}
          <MenuItem>
            <div
              className={clsx(
                styles.navbarItem,
                'pt-4 transition-colors text-levelup-400 hover:text-levelup-300',
                'dark:text-levelup-500  dark:hover:text-yelevelup-100',
              )}
              onClick={() => alert('NOT READY YET')}
            >
              View Cart
            </div>
          </MenuItem>
        </MenuItems>
      </nav>
    </Menu>
  );
}

export default MobileMenu;
