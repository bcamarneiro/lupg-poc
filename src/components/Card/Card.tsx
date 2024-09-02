import { Product } from '@types';

import styles from './Card.module.css';
import Button from '@components/Button';
import clsx from 'clsx';
import Tag from '@components/Tag';
import formatPrice from '@utils/formatPrice';

interface CardProps {
  product: Product;
  variant?: 'default' | 'horizontal';
}

function Card({ product, variant = 'default' }: CardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        variant === 'horizontal' && styles.horizontal,
        'border-levelup-200 dark:border-levelup-400',
      )}
    >
      <img
        className={styles.image}
        src={product.images[0].url}
        alt={product.images[0].alt}
      />
      <div className={clsx(styles.content, 'bg-levelup-600 dark:bg-levelup-200')}>
        {variant === 'default' && (
          <div className={styles.price}>{formatPrice(product.price.amount, product.price.currency)}</div>
        )}
        <div className={styles.name}>{product.name}</div>
        <div className={clsx(styles.description, 'text-levelup-300 dark:text-levelup-500')}>{product.description}</div>
        <div className={styles.tags}>
          {product.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {variant === 'horizontal' && (
          <div className={styles.price}>{formatPrice(product.price.amount, product.price.currency)}</div>
        )}
        <Button
          className="mt-1"
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}

export default Card;
