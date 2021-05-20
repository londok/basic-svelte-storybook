import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const beforeScreenshot = (page) => {
  return page.$('#root > *')
}
const getScreenshotOptions = ({ context, url }) => {
  return {
    encoding: 'base64',
    fullPage: false,
  }
}

initStoryshots({
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    beforeScreenshot,
    getScreenshotOptions,
  }),
})
