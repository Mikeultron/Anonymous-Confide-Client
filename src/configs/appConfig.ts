/**
 * app initial environment
 */
const appEnvironment = {
  dev: {
    api: {
      baseurl: "http://localhost:5000/api/v1",
    },
  },
  prod: {
    api: {
      baseurl: "https://api-anonymous-confide.herokuapp.com/api/v1",
    },
  },
};

/**
 * app initial active config
 */
const appActiveConfig = appEnvironment["dev"];

export { appEnvironment, appActiveConfig };
