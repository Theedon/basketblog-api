const fs = require("fs");
let jsonData = {};

const readJson = async (dataPath) => {
  try {
    const data = await fs.promises.readFile(dataPath, { encoding: "utf8" });
    const jsonData = JSON.parse(data);
    console.log("data read from file successfully");
    return jsonData;
  } catch (err) {
    // console.error(err);
    throw err;
  }
};

module.exports = readJson;
