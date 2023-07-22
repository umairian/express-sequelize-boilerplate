const { port } = require("./config");
const app = require("./app.js");

app.listen(port, () => {
  console.log(`✅ Server running on port: ${port}`);
});
