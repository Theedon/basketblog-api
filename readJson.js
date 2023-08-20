const fs = require("fs");
let jsonData = {};

const readJson = async (dataPath) => {
  await fs.readFile(dataPath, (err, data) => {
    if (err) {
      console.error(err);
    }
    try {
      jsonData = JSON.parse(data);
      console.log("json read successully");
    } catch (error) {
      console.error(error);
    }
  });
  return jsonData;
};

module.exports = readJson;
