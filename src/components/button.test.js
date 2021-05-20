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
      expect(button).toHaveTextContent("")
      expect(button.classList.contains(type.primary)).toBe(true);
      expect(button).toMatchSnapshot();
      fireEvent.click(button);
    })
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('loading, but not disabled', async () => {
    expect.hasAssertions();

    const mockClick = jest.fn();
    buttonData.click = mockClick;
    const { getByTestId } = render(Button, { props: { data: { ...buttonData, loading: true, disabled: false } } });
    let button
    await waitFor(() => {
      button = getByTestId(testId);
      expect(button).not.toHaveAttribute('disabled')
      expect(button).toHaveTextContent("Loading...")
      expect(button).toMatchSnapshot();
      fireEvent.click(button);
    })
    expect(mockClick).toHaveBeenCalledTimes(0);
  })

  it('disabled, but not loading', async () => {
    expect.hasAssertions();

    const mockClick = jest.fn();
    buttonData.click = mockClick;
    const { getByTestId } = render(Button, { props: { data: { ...buttonData, loading: false, disabled: true } } });
    let button
    await waitFor(() => {
      button = getByTestId(testId);
      expect(button).toHaveAttribute('disabled')
      expect(button).not.toHaveTextContent("Loading...")
      expect(button).toMatchSnapshot();
      fireEvent.click(button);
    })
    expect(mockClick).toHaveBeenCalledTimes(0);
  })

  it('not disabled, not loading', async () => {
    expect.hasAssertions();

    const mockClick = jest.fn();
    buttonData.click = mockClick;
    const { getByTestId } = render(Button, { props: { data: { ...buttonData, loading: false, disabled: false } } });
    let button
    await waitFor(() => {
      button = getByTestId(testId);
      expect(button).not.toHaveAttribute('disabled')
      expect(button).not.toHaveTextContent("Loading...")
      expect(button).toMatchSnapshot();
      fireEvent.click(button);
    })
    expect(mockClick).toHaveBeenCalledTimes(1);
  })

  it('disabled, loading', async () => {
    expect.hasAssertions();

    const mockClick = jest.fn();
    buttonData.click = mockClick;
    const { getByTestId } = render(Button, { props: { data: { ...buttonData, loading: true, disabled: true } } });
    let button
    await waitFor(() => {
      button = getByTestId(testId);
      expect(button).toHaveAttribute('disabled')
      expect(button).toHaveTextContent("Loading...")
      expect(button).toMatchSnapshot();
      fireEvent.click(button);
    })
    expect(mockClick).toHaveBeenCalledTimes(0);
  })
});