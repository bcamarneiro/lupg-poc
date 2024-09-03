import { render, screen } from '@testing-library/react';
import Page from './Page';

describe('Page component', () => {
  it('renders children correctly', () => {
    const { asFragment } = render(
      <Page>
        <div>Test Content</div>
      </Page>,
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies correct CSS class', () => {
    render(
      <Page>
        <div>Test Content</div>
      </Page>,
    );
    const mainElement = screen.getByRole('main');
    expect(mainElement.className).contains('page');
  });

  it('renders multiple children', () => {
    render(
      <Page>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Page>,
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();
  });
});
