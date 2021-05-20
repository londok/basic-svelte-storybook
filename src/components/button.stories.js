import { action } from '@storybook/addon-actions';

import { type } from "../constants"
import Button from "./button"

export default {
  title: 'Button',
  excludeStories: /.*Data$/
}

export const buttonData = {
  title: "Button",
  type: null,
  click: action('click'),
  disabled: false,
  loading: false,
}


export const Default = () => ({
  Component: Button,
  props: {
    data: buttonData
  }
})

export const EmptyProps = () => ({
  Component: Button,
  props: {
    data: {}
  }
})

export const Loading = () => ({
  Component: Button,
  props: {
    data: { ...buttonData, loading: true }
  }
})

export const Disabled = () => ({
  Component: Button,
  props: {
    data: { ...buttonData, disabled: true }
  }
})

export const Primary = () => ({
  Component: Button,
  props: {
    data: { ...buttonData, type: type.primary }
  }
})

export const Secondary = () => ({
  Component: Button,
  props: {
    data: { ...buttonData, type: type.secondary }
  }
})

export const Transparent = () => ({
  Component: Button,
  props: {
    data: { ...buttonData, type: type.transparent }
  }
})