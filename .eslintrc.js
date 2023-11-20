module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react/react-in-jsx-scope': 'off', // Importing React is no longer needed on React >= 17
    'react/jsx-uses-react': 'off',
  },
};
