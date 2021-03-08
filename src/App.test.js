import { render, waitFor } from '@testing-library/svelte';
import App from './App.svelte';
import { type } from "./constants"
const buttonData = {
  title: "Button",
  type: null,
  click: null,
  disabled: false,
  loading: false,
};
describe('App', () => {
  it('default', async () => {
    expect.hasAssertions();
    const { container } = render(App, { props: { data: buttonData } });
    await waitFor(() => {
      expect(container.firstChild.children[0]).toHaveTextContent("This is Button Page");
      expect(container.firstChild.children[1].firstChild.classList.contains(type.primary)).toBe(true);
      expect(container).toMatchSnapshot(); // capture snapshot
    })
  });
});