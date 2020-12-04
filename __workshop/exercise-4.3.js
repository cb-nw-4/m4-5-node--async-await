const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh
  let options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET',
    json: true
}

try{
  let joke = await request(options).then((res)=>res.joke);
  return joke;
} catch(err){
  console.log(err);
}

};

getGeekJoke().then((res)=>console.log(res));
