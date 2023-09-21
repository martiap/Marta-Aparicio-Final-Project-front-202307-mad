import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

describe('When it is instantiated with a route /', () => {
  const MockedHome = jest.fn().mockReturnValue(<h1>Home</h1>);
  jest.mock('../components/home/home', () => MockedHome);

  let element: HTMLElement;

  beforeEach(async () => {
    await act(async () =>
      render(
        <Router initialEntries={['/']} initialIndex={0}>
          <AppRoutes></AppRoutes>
        </Router>
      )
    );

    element = screen.getByText('Home');
  });
  test('Then it should render Home', () => {
    expect(MockedHome).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});

describe('When it is instantiated with a route /', () => {
  const MockedRegister = jest.fn().mockReturnValue(<h1>Register</h1>);
  jest.mock(
    '../users/components/registerUser/registerForm',
    () => MockedRegister
  );

  let element: HTMLElement;

  beforeEach(async () => {
    await act(async () =>
      render(
        <Router initialEntries={['/login']} initialIndex={0}>
          <AppRoutes></AppRoutes>
        </Router>
      )
    );

    element = screen.getByText('Register');
  });
  test('Then it should render Register', () => {
    expect(MockedRegister).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});

describe('When it is instantiated with a route /', () => {
  const MockedError = jest.fn().mockReturnValue(<h1>ErrorPage</h1>);
  jest.mock('../components/error-page/error-page', () => MockedError);

  let element: HTMLElement;

  beforeEach(async () => {
    await act(async () =>
      render(
        <Router initialEntries={['/*']} initialIndex={0}>
          <AppRoutes></AppRoutes>
        </Router>
      )
    );

    element = screen.getByText('ErrorPage');
  });
  test('Then it should render ErrorPage', () => {
    expect(MockedError).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});
describe('When it is instantiated with a route /', () => {
  const MockedRecipes = jest.fn().mockReturnValue(<h1>RecipesPage</h1>);
  jest.mock('../recipies/components/recipes/recipes', () => MockedRecipes);

  let element: HTMLElement;

  beforeEach(async () => {
    await act(async () =>
      render(
        <Router initialEntries={['/recetas']} initialIndex={0}>
          <AppRoutes></AppRoutes>
        </Router>
      )
    );

    element = screen.getByText('RecipesPage');
  });
  test('Then it should render Page', () => {
    expect(MockedRecipes).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});

describe('When it is instantiated with a route /', () => {
  const MockedRecipes = jest.fn().mockReturnValue(<h1>DetailsRecipePage</h1>);
  jest.mock(
    '../recipies/components/details-recipe/details-recipe',
    () => MockedRecipes
  );

  let element: HTMLElement;

  beforeEach(async () => {
    await act(async () =>
      render(
        <Router initialEntries={['/recetas/:id']} initialIndex={0}>
          <AppRoutes></AppRoutes>
        </Router>
      )
    );

    element = screen.getByText('DetailsRecipePage');
  });
  test('Then it should render Page', () => {
    expect(MockedRecipes).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});
