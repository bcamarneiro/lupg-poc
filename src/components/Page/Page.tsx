import { PropsWithChildren } from 'react';
import style from './Page.module.css';

function Page({ children }: PropsWithChildren) {
  return <main className={style.page}>{children}</main>;
}
export default Page;
