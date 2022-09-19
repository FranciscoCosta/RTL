import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { render , screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do component App', () => {
  test('Testa se a aplicação contém um conjunto fixo de links de navegação:', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    const linkAbout = screen.getByRole('link', { name: 'About' });
    const linkFavorite = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });

    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });
});
