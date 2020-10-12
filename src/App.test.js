import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/svelte';
import App from './App.svelte';

describe('Shopping cart', function () {
  it('it works!', function () {
    expect(1).toEqual(1);
  });
});

afterEach(cleanup);
test('should render ui', function () {
  const { getByText } = render(App);
  expect(getByText('Shopping Cart')).toBeInTheDocument();
  expect(getByText('TOTAL:')).toBeInTheDocument();
});
