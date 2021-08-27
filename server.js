const config = require("./config");
const app = require("./app.js");
const port = config.get("port");

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
