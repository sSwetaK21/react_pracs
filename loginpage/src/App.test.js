import { render, screen } from '@testing-library/react';
import Greet from './components/Greet';

test('renders learn react link', () => {
  render(<Greet />);
  const linkElement = screen.getByText("Hello");
  expect(linkElement).toBeInTheDocument();
});
