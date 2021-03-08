import { render, fireEvent, waitFor } from '@testing-library/svelte';
import { type } from "../constants"
import Button from './button.svelte';
const testId = "button-tid";
const buttonData = {
  title: null,
  type: null,
  click: null,
  disabled: false,
  loading: false,
}
describe('Button', () => {
  it('default', async () => {
    expect.hasAssertions();
const mockClick = jest.fn();
    buttonData.click = mockClick;
    const { getByTestId } = render(Button, { props: { data: buttonData } });
    let button;
    await waitFor(() => {
      button = getByTestId(testId);
      expect(button).toHaveTextContent('')
      expect(button.classList.contains(type.primary)).toBe(true);
      expect(button).toMatchSnapshot();
      fireEvent.click(button);
    })
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
it('undefined', async () => {
    expect.hasAssertions();
const mockClick = jest.fn();
    buttonData.click = mockClick;
    const { getByTestId } = render(Button);
    await waitFor(() => {
      const button = getByTestId(testId);
      expect(button).toHaveTextContent('')
      expect(button.classList.contains("button")).toBe(true);
      expect(button).toMatchSnapshot();
      fireEvent.click(button);
    })
    expect(mockClick).toHaveBeenCalledTimes(0);
  });
it('title', async () => {
    expect.hasAssertions();
const { getByTestId } = render(Button, { props: { data: { ...buttonData, title: "Button Title" } } });
    await waitFor(() => {
      const button = getByTestId(testId);
      expect(button).toHaveTextContent("Button Title");
      expect(button).toMatchSnapshot();
    })
  });
it('loading', async () => {
    expect.hasAssertions();
const mockClick = jest.fn();
    buttonData.click = mockClick;
    const { getByTestId } = render(Button, { props: { data: { ...buttonData, loading: true } } });
    let button;
    await waitFor(() => {
      button = getByTestId(testId);
      expect(button).toHaveTextContent("Loading...")
      expect(button).toMatchSnapshot();
      fireEvent.click(button);
    })
    expect(mockClick).toHaveBeenCalledTimes(0);
  });
it('disabled', async () => {
    expect.hasAssertions();
const mockClick = jest.fn();
    buttonData.click = mockClick;
    const { getByTestId } = render(Button, { props: { data: { ...buttonData, disabled: true } } });
    let button
    await waitFor(() => {
      button = getByTestId(testId);
      expect(button).toHaveAttribute('disabled')
      expect(button).toMatchSnapshot();
      fireEvent.click(button);
    })
    expect(mockClick).toHaveBeenCalledTimes(0);
  })
  
  it('primary', async () => {
    expect.hasAssertions();
const { getByTestId } = render(Button, { props: { data: { ...buttonData, type: type.primary } } });
    await waitFor(() => {
      const button = getByTestId(testId)
      expect(button.classList.contains(type.primary)).toBe(true);
      expect(button).toMatchSnapshot();
    })
  })
it('secondary', async () => {
    expect.hasAssertions();
const { getByTestId } = await render(Button, { props: { data: { ...buttonData, type: type.secondary } } });
    await waitFor(() => {
      const button = getByTestId(testId)
      expect(button.classList.contains(type.secondary)).toBe(true);
      expect(button).toMatchSnapshot();
    })
  })
it('transparent', async () => {
    expect.hasAssertions();
const { getByTestId } = await render(Button, { props: { data: { ...buttonData, type: type.transparent } } });
    await waitFor(() => {
      const button = getByTestId(testId)
      expect(button.classList.contains(type.transparent)).toBe(true);
      expect(button).toMatchSnapshot();
    })
  })
});