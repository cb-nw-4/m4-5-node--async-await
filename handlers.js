// nothing here yet...
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (req, res) => {
  let response = {status: 200};
  if (req.params.type === "dad") 
    response.joke = await getDadJoke();
  else if (req.params.type === "tronald") {
    response.joke = await getTronaldDumpQuote();
  } else if (req.params.type === "geek") {
    response.joke = await getGeekJoke();
  }
  console.log(req);
  res.status(200).json(response);
};


module.exports = { handleJoke };


