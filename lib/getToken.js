const fs = require('fs');
const path = require('path');

const DEFAULT_CONFIG_PATH = path.resolve(process.env.HOME, '.uclapi.config.json');

function getToken(commandToken, configPath = DEFAULT_CONFIG_PATH) {
  if (commandToken) {
    return commandToken;
  }
  try {
    const config = require(configPath);
    return config.token;
  } catch (e) {
    console.log('Could not find token in command or config file');
  }
}

module.exports = getToken;
