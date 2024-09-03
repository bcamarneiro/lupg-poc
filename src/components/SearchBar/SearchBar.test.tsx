import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('renders search input correctly', () => {
    const mockOnChange = vi.fn();
    const { asFragment } = render(<SearchBar onChange={mockOnChange} />);

    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');

    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onChange handler when input value changes', () => {
    const mockOnChange = vi.fn();
    render(<SearchBar onChange={mockOnChange} />);

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
