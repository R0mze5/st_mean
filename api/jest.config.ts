export default {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '^@server(.*)$': '<rootDir>/server$1',
  },
};
