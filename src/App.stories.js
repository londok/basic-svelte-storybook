import App from './App.svelte';
import { buttonData } from './components/button.stories';

export default {
  title: 'App',
  excludeStories: /.*Data$/
}

export const Default = () => ({
  Component: App,
  props: {
    data: buttonData,
  }
});