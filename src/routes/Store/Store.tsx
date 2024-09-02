import styles from './Store.module.css';

import { Card, Toggle } from '@components';
import { useState } from 'react';
import clsx from 'clsx';
import SearchBar from '@components/SearchBar';
import { Grid, List } from '@components/Icons';
import { useProductsApi } from '@services';

function Store() {
  const [isGrid, setIsGrid] = useState(true);
  const [search, setSearch] = useState('');
  const { data, isLoading } = useProductsApi({ search });

  return (
    <>
      <div className={styles.header}>
        <SearchBar
          className="grow"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Toggle
          options={[
            { value: 'grid', label: 'Grid', icon: (props) => <Grid inverted={props?.inverted} /> },
            { value: 'list', label: 'List', icon: (props) => <List inverted={props?.inverted} /> },
          ]}
          onChange={(value: string) => setIsGrid(value === 'grid')}
        />
      </div>
      <div className={clsx(styles.wrapper, isGrid ? styles.gallery : styles.list)}>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          data &&
          data.map((product) => (
            <Card
              key={product.uuid}
              product={product}
              variant={isGrid ? 'default' : 'horizontal'}
            />
          ))}
      </div>
    </>
  );
}

export default Store;
