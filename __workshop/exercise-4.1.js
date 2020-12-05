const request = require("request-promise");

// getDadJoke

// 4.1
// getDadJoke().then((data) => console.log(data));
const getDadJoke = async () => {
const options = {
    uri : "https://icanhazdadjoke.com/", 
    headers: {
        'User-Agent': 'Request-Promise',
        "Accept": "application/json"
    }

}
try {
   
 const joke = await request(options);
 const parsedJoke = JSON.parse(joke);
 return parsedJoke.joke;
    }
    catch (err) {
console.log(err, "Error")
    }
}
getDadJoke().then((data) => console.log(data));
module.exports = { getDadJoke };