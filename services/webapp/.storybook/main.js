module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
};
