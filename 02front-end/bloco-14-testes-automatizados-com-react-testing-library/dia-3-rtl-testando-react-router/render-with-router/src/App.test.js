import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });
  
  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);
  
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', async () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const notFoundTitle = await screen.findByRole('heading',
      { name: /^Página não encontrada$/g, level: 1 });
    expect(notFoundTitle).toBeInTheDocument();
  });
});

describe('Teste de componentes individuais', () => {
  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
});
