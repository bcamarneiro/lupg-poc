import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from './Toggle';

describe('Toggle component', () => {
  const mockOptions = [
    { label: 'Option 1', icon: () => <span>Icon1</span>, value: 'option1' },
    { label: 'Option 2', icon: () => <span>Icon2</span>, value: 'option2' },
  ];

  it('renders toggle options correctly', () => {
    const mockOnChange = vi.fn();
    const { asFragment } = render(
      <Toggle
        options={mockOptions}
        onChange={mockOnChange}
      />,
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Icon1')).toBeInTheDocument();
    expect(screen.getByText('Icon2')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onChange handler when an option is clicked', () => {
    const mockOnChange = vi.fn();
    render(
      <Toggle
        options={mockOptions}
        onChange={mockOnChange}
      />,
    );

    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('option2');
  });

  it('updates active state when an option is clicked', () => {
    const mockOnChange = vi.fn();
    render(
      <Toggle
        options={mockOptions}
        onChange={mockOnChange}
      />,
    );

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');

    expect(option1.parentElement).toHaveClass('bg-levelup-200');
    expect(option2.parentElement).toHaveClass('bg-levelup-600');

    fireEvent.click(option2);

    expect(option1.parentElement).toHaveClass('bg-levelup-600');
    expect(option2.parentElement).toHaveClass('bg-levelup-200');
  });
});
