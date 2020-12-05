const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh
  const options={
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    headers:{ Accept: "application/json" },
  }
  try{
    const geekJoke=await request(options);
    const parsed=JSON.parse(geekJoke);
    return parsed.joke;
  }
  catch(err){
    console.log(err);
  }
};
//getGeekJoke().then((data)=>console.log(data));

module.exports={ getGeekJoke };
