import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { ROUTES } from '@routes';
import { ReactNode } from 'react';
import { DarkModeProvider } from '@hooks/DarkModeContext';

const renderWithRouter = (component: ReactNode) => {
  return render(
    <BrowserRouter>
      <DarkModeProvider>{component}</DarkModeProvider>
    </BrowserRouter>,
  );
};

describe('Navbar component', () => {
  it('renders logo correctly', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('renders navigation links correctly', () => {
    renderWithRouter(<Navbar />);
    ROUTES.forEach((route) => {
      expect(screen.getByText(route.name)).toBeInTheDocument();
    });
  });

  it('applies active class to current route', () => {
    renderWithRouter(<Navbar />);
    const homeLink = screen.getByText(ROUTES[0].name);
    expect(homeLink).toHaveClass('!text-yelevelup-100');
    expect(homeLink).toHaveClass('!dark:text-yelevelup-50');
    expect(homeLink).toHaveClass('font-medium');
  });

  it('renders View Cart button', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('View Cart')).toBeInTheDocument();
  });

  it('shows alert when View Cart button is clicked', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    renderWithRouter(<Navbar />);
    const viewCartButton = screen.getByText('View Cart');
    fireEvent.click(viewCartButton);
    expect(alertMock).toHaveBeenCalledWith('NOT READY YET');
    alertMock.mockRestore();
  });
});
