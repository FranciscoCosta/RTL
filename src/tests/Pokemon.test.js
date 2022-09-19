import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente Pokemon.js', () => {
  test('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);
    const img = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
      'alt',
      'Pikachu sprite',
    );
  });

  test('A imagem do pokemon possui o src correto e alt', () => {
    renderWithRouter(<App />);

    const detalhes = screen.getByRole('link', { name: /more details/i });

    userEvent.click(detalhes);

    const pokefav = screen.getByLabelText(/pokémon favoritado??/i);

    userEvent.click(pokefav);

    const favs = screen.getByRole('img', {
      name: 'Pikachu is marked as favorite',
    });
    expect(favs).toBeInTheDocument();
    expect(favs).toHaveAttribute('src', '/star-icon.svg');
  });

  test('Testa se o tipo de pokemon é renderizado', () => {
    renderWithRouter(<App />);
    const tipo = screen.getByTestId('pokemon-type', { name: /electric/i });
    expect(tipo).toBeInTheDocument();
    expect(tipo.innerHTML).toBe('Electric');
  });
});
