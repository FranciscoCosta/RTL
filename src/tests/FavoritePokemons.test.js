import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Teste o componente FavoritePokemons', () => {
  test(
    'Teste se é exibida na tela a mensagem No favorite pokemon found,'
    + 'caso a pessoa não tenha pokémons',
    () => {
      renderWithRouter(<FavoritePokemons />);

      const texto = screen.getByText('No favorite pokemon found');
      expect(texto).toBeInTheDocument();
    },
  );
});
