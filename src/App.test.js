import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Renders <App /> component and its child correctly', () => {
  test('Should render App component', () => {
    const AppComponent = render(<App />);
    expect(AppComponent).toBeTruthy();
  });
});
