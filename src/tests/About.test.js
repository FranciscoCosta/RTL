import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Teste o componente About', () => {
  test('Teste se a página contém as informações sobre a Pokédex;', () => {
    renderWithRouter(<About />);
    const title = screen.getByRole('heading', {
      name: 'About Pokédex',
      level: 2,
    });
    const image = screen.getByRole('img');

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png'
      + '/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
