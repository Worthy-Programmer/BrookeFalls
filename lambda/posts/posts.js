const path = require("path");

const { processFile, default: processDir } = require("md-yaml-json");

const postsDir = "posts/";
const absPostsDir = path.join(__dirname, postsDir);


exports.handler = async (event) => {
  const { name } = event.queryStringParameters;

    let body = [];

    /* If parameter "name" is given, return only the specific markdown file
    else return the details of all the markdown files */

    if (name) {
      body = processFile(absPostsDir + name + ".md");
    } else {
      body = processDir(absPostsDir);
    }

    return {
      body: JSON.stringify(body),
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
    };
};
