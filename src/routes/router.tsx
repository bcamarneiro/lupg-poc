import { createBrowserRouter } from 'react-router-dom';
import Store from './Store';

export const ROUTES = [
  {
    name: 'Store',
    path: '/',
    element: <Store />,
  },
  {
    name: 'Reviews',
    path: '/reviews',
    element: <div>Reviews Not available! 😭</div>,
  },
  {
    name: 'Blog',
    path: '/blog',
    element: <div>Blog Not available! 😭</div>,
  },
  {
    name: 'About',
    path: '/about',
    element: <div>About Not available! 😭</div>,
  },
  {
    name: 'Media',
    path: '/media',
    element: <div>Media Not available! 😭</div>,
  },
  {
    name: 'Locations',
    path: '/locations',
    element: <div>Locations Not available! 😭</div>,
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <div>Contact Not available! 😭</div>,
  },
];

const router = createBrowserRouter(ROUTES);

export default router;
