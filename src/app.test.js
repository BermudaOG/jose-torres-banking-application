import { render, screen, fireEvent } from '@testing-library/react';
import Login from './login';

test('login with valid credentials', async () => {
  render(<Login />);

  const emailInput = screen.getByLabelText('Email:');
  const passwordInput = screen.getByLabelText('Password:');
  const loginButton = screen.getByTestId('login-button');

  fireEvent.change(emailInput, { target: { value: 'abel@mit.edu' } });
  fireEvent.change(passwordInput, { target: { value: 'secret' } });

  fireEvent.click(loginButton);


  const statusMessage = await screen.findByText((content, element) => {
    return /Login successful/.test(content);
  });

  expect(statusMessage).toBeInTheDocument();
});
