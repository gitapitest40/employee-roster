import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Modal from './Modal';

// Create a mock Redux store
const mockStore = configureStore([]);

describe('Modal Component', () => {
  let store;

  beforeEach(() => {
    const initialState = {
      employeeDetails: {
        firstName: 'John',
        lastName: 'Doe',
        jobTitle: 'Software Engineer',
        age: 30,
        dateJoined: '2022-01-01',
        bio: 'A software engineer.',
      },
    };
    store = mockStore(initialState);
  });

  it('renders modal when employeeDetails is present', () => {
    const { container } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    // Check if the modal is rendered when employeeDetails is present
    expect(container.querySelector('.employee-detail-modal')).toBeInTheDocument();
  });
});
