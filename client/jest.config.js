module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['**/__tests__/**/*.(js|jsx)', '**/?(*.)+(spec|test).(js|jsx)'],
};

