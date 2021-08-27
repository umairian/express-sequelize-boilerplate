if (process.env.NODE_ENV === "production") {
  // We're in production, return prod keys
  module.exports = require("./prod");
} else {
  // We're in development, return dev keys
  module.exports = require("./dev");
}
