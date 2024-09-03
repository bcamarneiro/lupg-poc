import styles from './Store.module.css';

import { Card, Toggle } from '@components';
import { useMemo, useState } from 'react';
import clsx from 'clsx';
import SearchBar from '@components/SearchBar';
import { Grid, List } from '@components/Icons';
import { useProductsApi } from '@services';
import debounce from 'lodash/debounce';

function Store() {
  const [isGrid, setIsGrid] = useState(true);
  const [search, setSearch] = useState('');
  const { data, isLoading } = useProductsApi({ search });

  const debouncedSetSearch = useMemo(() => debounce((value: string) => setSearch(value), 300), []);

  return (
    <>
      <div className={styles.header}>
        <SearchBar
          className="grow pr-[10px]"
          onChange={(e) => debouncedSetSearch(e.target.value)}
        />
        <Toggle
          options={[
            { value: 'grid', label: 'Grid', icon: (props) => <Grid inverted={props?.inverted} /> },
            { value: 'list', label: 'List', icon: (props) => <List inverted={props?.inverted} /> },
          ]}
          onChange={(value: string) => setIsGrid(value === 'grid')}
        />
      </div>
      <h1 className={styles.title}>All Products</h1>
      <div className={clsx(styles.wrapper, isGrid ? styles.gallery : styles.list)}>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          data &&
          data.length > 0 &&
          data.map((product) => (
            <Card
              key={product.uuid}
              product={product}
              variant={isGrid ? 'default' : 'horizontal'}
            />
          ))}
        {!isLoading && data && data.length === 0 && <div>No products matching the search criteria</div>}
      </div>
    </>
  );
}

export default Store;
