module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        debug: false,
      },
    ],
  },
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
    "/build/"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/build/"
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