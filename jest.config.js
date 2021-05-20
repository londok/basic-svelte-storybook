module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        debug: false,
      },
    ],
    "^.+\\.stories\\.[jt]sx?$": "<rootDir>node_modules/@storybook/addon-storyshots/injectFileName",
  },
  transformIgnorePatterns: ["node_modules/(?!@storybook/*)"],
  bail: false,
  verbose: true,
  moduleFileExtensions: [
    "js",
    "svelte",
    "json"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/build/",
    "/storybook-static/"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/build/",
    "/storybook-static/",
    "/.storybook/",
  ],
  coverageProvider: "babel",
  collectCoverageFrom: [
    "src/**/*.svelte"
  ],
  coverageThreshold: {
    "./src/components/": {
      "branches": 80,
      "functions": 100,
      "lines": 100,
      "statements": 100
    },
  },
  coverageReporters: ["json", "html", "text", "clover"],
}
