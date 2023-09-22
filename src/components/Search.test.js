import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';
import constants from '../const/const';

describe('Search Component', () => {
  it('renders the Search component with input field and button', () => {
    const { getByText, getByPlaceholderText } = render(<Search />);
    
    // Check if the search button is rendered with the correct text
    expect(getByText(constants.search.searchBtn)).toBeInTheDocument();
  });
});
