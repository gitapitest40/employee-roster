import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // You may need to install this if you haven't already
import Header from './Header';

// Create a mock Redux store
const mockStore = configureStore([]);

describe('Header Component', () => {
  let store;

  beforeEach(() => {
    const initialState = {
      companyInfo: {
        companyName: 'Test Company',
        companyMotto: 'Test Motto',
        companyEst: '01/01/2022',
      },
    };
    store = mockStore(initialState);
  });

  it('renders header with company name and motto', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // Check if the company name and motto are rendered
    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('Test Motto')).toBeInTheDocument();
  });
});
