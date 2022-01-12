const fs = require("fs");
const { helloTemplate } = require("./ejs");

const output = "./output.html";

async function main() {
  const str = await helloTemplate({ name: "World" });
  fs.writeFileSync(output, str);
}

main();
