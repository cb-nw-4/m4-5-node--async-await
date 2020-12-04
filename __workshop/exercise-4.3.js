const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh

    try{

      let options = {
        url: 'https://geek-jokes.sameerkumar.website/api?format=json',
        method: 'GET',
        json: true
    }
    
    const response = await request(options)
      
    return response.joke;

  } catch(error){
    console.log(error)
}
};

getGeekJoke().then((data) => console.log(data))


module.exports = {getGeekJoke}
