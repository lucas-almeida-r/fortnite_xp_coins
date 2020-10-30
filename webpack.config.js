const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const preConfig = await createExpoWebpackConfigAsync(env, argv);

  let https = true;
  if (preConfig.mode === 'development') {
    https = false;
  }

  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      offline: true,
      https: https
    },
    argv
  );

  // Customize the config before returning it.
  return config;
};