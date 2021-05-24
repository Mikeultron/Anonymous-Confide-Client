/**
 * app initial environment
 */
const appEnvironment = {
  dev: {
    api: {
      baseurl: "http://localhost:5000/api",
    },
  },
  prod: {
    api: {
      baseurl: "http://localhost:5000/api",
    },
  },
};

/**
 * app initial active config
 */
const appActiveConfig = appEnvironment["dev"];

export { appEnvironment, appActiveConfig };
