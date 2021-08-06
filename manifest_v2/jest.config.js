module.exports = {
  testEnvironment: 'jsdom', // this is the default and jest-puppeteer cannot override
  // to use hest-puppeteer environment we declare via comments on top of the test file
  // the environment must be at the highest precendece of any other comment even eslint should be after
  preset: 'jest-puppeteer',
  collectCoverage: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  restoreMocks: true, // restore mock on each test without polluting test file
};
