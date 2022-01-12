const { helloTemplate } = require("../ejs");

describe("hello template file", () => {
  test("expect helloTemplate fn output to match snapshot", async () => {
    const data = { name: "World" };
    const str = await helloTemplate(data);

    expect(str).toMatchSnapshot();
  });
});
