/* eslint-disable quotes */
/* eslint-disable strict */
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass(withImages()));
