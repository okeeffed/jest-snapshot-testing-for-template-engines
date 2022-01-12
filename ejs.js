const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const filepath = path.resolve(__dirname, "./templates/hello.ejs");

const helloTemplate = async (data) => {
  const template = fs.readFileSync(filepath, "utf8");
  const str = await ejs.render(template, data, {
    async: true,
  });

  return str;
};

module.exports = {
  helloTemplate,
};
