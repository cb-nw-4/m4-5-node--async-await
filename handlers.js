// nothing here yet...
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (joke) => {
  if (joke === "tronald") {
    return await getTronaldDumpQuote();
  } else if (joke === "dad") {
    return await getDadJoke();
  } else if (joke === 'geek'){
    return await getGeekJoke();
  } else {
    return 'not a joke'
  }
};

module.exports = { handleJoke };
