const request = require("request-promise");


// getDadJoke

// 4.1
// getDadJoke().then((data) => console.log(data));

var options = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
        "Accept": "application/json"
    },
    json: true // Automatically parses the JSON string in the response
};

const getDadJoke = async () => {
  try {
    const response = await request(options);
    
    console.log(response.joke);
    return response.joke;
  } catch (err) {
    console.log("Error: ", err);
  }
};

//getDadJoke();

module.exports = { getDadJoke };



 
// request(options)
//     .then(function (repos) {
//         console.log('User has %d repos', repos.length);
//     })
//     .catch(function (err) {
//         // API call failed...
//     });