// in gatsby-config.js
const rupture = require("rupture");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-stylus",
      options: {
        use: [rupture()],
      },
    },
  ],
};