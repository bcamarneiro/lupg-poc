import { render, screen } from '@testing-library/react';
import Tag from './Tag';

describe('Tag component', () => {
  it('renders tag with children correctly', () => {
    const { asFragment } = render(<Tag>Test Tag</Tag>);

    expect(screen.getByText('Test Tag')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with custom children', () => {
    render(
      <Tag>
        <span>Custom</span>
        <strong>Content</strong>
      </Tag>,
    );

    expect(screen.getByText('Custom')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
