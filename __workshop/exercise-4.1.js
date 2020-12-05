
const request = require("request-promise");

// getDadJoke
const getDadJoke= async ()=>{
    const options={
        uri:'https://icanhazdadjoke.com/',
        headers:{ Accept: "application/json" },
    }
    try{
        let response=await request(options);
        const parsed= JSON.parse(response);
        return parsed.joke;
    }
    catch(err){
        console.log(err);
    }
};
// 4.1
//getDadJoke().then((data) => console.log(data));
module.exports={ getDadJoke }
