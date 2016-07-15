var config = {
  database: {
    production: {
      database: "",
      username: "",
      password: "",
      host: "",
      dialect: ""
    },
    development: {
      database: "homenow2",
      username: "joaomanoellins",
      password: "",
      host: "127.0.0.1",
      dialect: "postgres"
    }
  },
  api: {
    url: '/api/v1/'
  }
}

module.exports = config;
