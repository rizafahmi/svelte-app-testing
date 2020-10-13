import '@testing-library/jest-dom/extend-expect'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/svelte';
import App from './App.svelte';

let items = [
  {id: 1, name: "Item 1", qty: 1, price: 1000}
];

describe('Shopping cart', function() {
  it('it works!', function() {
    expect(1).toEqual(1);
  });
});

afterEach(cleanup);

test('should render ui', function() {
  const { getByText } = render(App, {items: items});
  expect(getByText('Shopping Cart')).toBeInTheDocument();
  expect(getByText('TOTAL:')).toBeInTheDocument();
});

test('should render items', async function() {
  render(App, {items: items});
  await waitFor(function() {
    const lis = document.querySelectorAll('li');
    expect(lis.length).toBe(items.length + 1);
  });
});

test('should have new item button', function() {
  const { getByText } = render(App, {items: items});
  expect(getByText('New Item')).toBeInTheDocument();
});

test('should add new item into the list', async function() {
  const { getByText } = render(App, {items: items});
  fireEvent.click(getByText('New Item'));

  // TODO: Memastikan newItem ada qty dan price-nya

  await waitFor(function() {
    const lis = document.querySelectorAll('li');
    expect(lis.length).toBe(items.length + 1 + 1);
  });
});
test('new item should have default price and qty', function() {
  const { getByText } = render(App, {items: items});
  fireEvent.click(getByText('New Item'));
});
test('should increase quantity if button + click', function() {});
test('should decrease quantity if button - click', function() {});
