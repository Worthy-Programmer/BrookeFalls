const path = require("path");

const { processFile, default: processDir } = require("md-yaml-json");
const { writeFile } = require("fs").promises;

const postsDir = "posts/";
const absPostsDir = path.join(__dirname, postsDir);


exports.handler = async (event) => {
  // POST request
  console.log(event.httpMethod)
  if(event.httpMethod === 'POST')
  {
  const params = new URLSearchParams(event.body);
  console.log(params.get('name'))
    if(params.has('name') && params.has('body')) {
      const name = params.get('name');
      const body = params.get('body');

      try {

        const file = name.toLowerCase().replace(' ', '-') + '.md';
        console.log(file);
       return await writeFile(path.join(absPostsDir,  file), body)
        .then(() => {
          return {
            statusCode: 200,
            body: JSON.stringify({result: true, name: file})
          }
        })
      } catch(e) {
        return {
          body: e.message,
          statusCode: 500
        }
      }
    }
  
    return {
      statusCode: 400
    }
  }

  // GET request
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
