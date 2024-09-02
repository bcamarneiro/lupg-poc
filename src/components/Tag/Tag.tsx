import { PropsWithChildren } from 'react';

import style from './Tag.module.css';
import clsx from 'clsx';

function Tag({ children }: PropsWithChildren) {
  return <span className={clsx(style.tag, 'bg-levelup-500 dark:bg-levelup-300')}>{children}</span>;
}
export default Tag;
