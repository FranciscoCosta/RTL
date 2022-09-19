import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente Pokedex.', () => {
  test('Teste nome dos botões', () => {
    renderWithRouter(<App />);
    const firebtn = screen.getByRole('button', { name: /Fire/i });
    expect(firebtn).toBeInTheDocument();
  });

  test('Teste tipo dos botões', () => {
    renderWithRouter(<App />);
    const filtPoke = screen.getAllByTestId('pokemon-type-button');
    const types = 7;
    expect(filtPoke).toHaveLength(types);
  });
  test('Teste click do botao all ', () => {
    renderWithRouter(<App />);
    const btnall = screen.getByRole('button', { name: 'All' });
    expect(btnall).toBeInTheDocument();
    userEvent.click(btnall);
  });
});
