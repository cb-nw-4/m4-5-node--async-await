const request = require("request-promise");
const requestObj = {
  uri: 'https://icanhazdadjoke.com/',
  headers: { 'Accept': 'application/json' }
};

const getDadJoke = async () => {
  try {
    const response = await request(requestObj);
    const jokeObj = JSON.parse(response);
    
    return jokeObj.joke;
  } catch (err) {
    console.log(err);
  }
}

getDadJoke().then((data) => console.log(data));
