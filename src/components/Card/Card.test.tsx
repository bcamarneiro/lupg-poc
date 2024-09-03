import { render, screen } from '@testing-library/react';
import Card from './Card';
import { Product } from '@types';

const mockProduct: Product = {
  uuid: '1',
  name: 'Test Product',
  description: 'This is a test product',
  price: { amount: 10, currency: 'USD' },
  images: [{ url: 'test-image.jpg', alt: 'Test Image' }],
  tags: ['tag1', 'tag2'],
};

describe('Card component', () => {
  it('renders product information correctly', () => {
    const { asFragment } = render(<Card product={mockProduct} />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test product')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('tag1')).toBeInTheDocument();
    expect(screen.getByText('tag2')).toBeInTheDocument();
  });

  it('applies horizontal variant correctly', () => {
    render(
      <Card
        product={mockProduct}
        variant="horizontal"
      />,
    );
    const card = screen.getByRole('img').closest('div');
    expect(card?.className).includes('horizontal');
  });

  it('renders "View Details" button', () => {
    render(<Card product={mockProduct} />);
    expect(screen.getByText('View Details')).toBeInTheDocument();
  });
});
