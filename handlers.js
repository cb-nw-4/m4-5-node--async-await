const { getDadJoke } = require('./__workshop/exercise-4.1');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getGeekJoke } = require('./__workshop/exercise-4.3');

const handleJoke = async (type, res) => {
  if (type === "dad") {
    let quote = await getDadJoke();
    res.status(200).json({
        status: 200, 
        response: quote,
    });
  }
  else if (type === "tronald") {
    let quote = await getTronaldDumpQuote();
    res.status(200).json({
        status: 200,
        response: quote,
    });
  } 
  else if (type === "geek") {
    let quote = await getGeekJoke();
    res.status(200).json({
        status: 200,
        response: quote,
    });
  } 
  else {
    res.status(404).json({
        status: 404,
        response: "Unrecognized joke type.",
    });
  }
}

module.exports = { handleJoke };
