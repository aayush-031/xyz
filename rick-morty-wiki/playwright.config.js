const config = {
  use: {
    headless: false,
    viewport: { width: 428, height: 926 },
  },
  reporter: [
    ["json", { outputFile: "./test/json/result.json" }],
    ["html", { outputFolder: "./test/html" }],
  ],
  timeout: 10000,
};

export default config;
