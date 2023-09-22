import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Table from './Table';
import {
  setEmployeesDetails,
} from '../actions/employeeAction';
import data from '../sampleData';

const mockStore = configureStore([]);

describe('Table Component', () => {
  let store;

  beforeEach(() => {
    const initialState = {
      employeesData: data.employees.slice(0, 5), // Initial data for testing
      pageNo: 1,
      totalRecords: data.employees.length,
      maxRecords: 5,
      employeeDetails: null,
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn(); // Mock the dispatch function
  });

  it('renders the Table component with initial data', () => {
    const { getByText, getAllByTestId } = render(
      <Provider store={store}>
        <Table />
      </Provider>
    );

    // Check if the table headers are rendered
    expect(getByText('Id')).toBeInTheDocument();
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Contact No')).toBeInTheDocument();
    expect(getByText('Address')).toBeInTheDocument();

    // Check if the initial data is rendered
    const tableRows = getAllByTestId('table-row');
    expect(tableRows).toHaveLength(5); // Assumes you're displaying 5 records initially
  });

  it('opens the employee details modal when a row is clicked', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Table />
      </Provider>
    );

    const tableRows = getAllByTestId('table-row');
    fireEvent.click(tableRows[0]);

    // Check if the employee details modal is opened
    expect(store.dispatch).toHaveBeenCalledWith(
      setEmployeesDetails(data.employees[0])
    );
  });
});
