const { getDadJoke } = require("./__workshop/exercise-4.1.js");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2.js");
const { getGeekJoke } = require("./__workshop/exercise-4.3.js");

const handleJoke = async (joke) => {
  switch (joke.toLowerCase()) {
    case "dad":
      try {
        const dadJoke = await getDadJoke();
        return dadJoke;
        // return res.status(200).json({ status: 200, joke: dadJoke });
      } catch (err) {
        res.status(404).json({ status: 404, message: err });
      }
      break;

    case "tronald":
      try {
        const tronaldJoke = await getTronaldDumpQuote();
        return tronaldJoke;
        //    return  res.status(200).json({ status: 200, joke: tronaldJoke });
      } catch (err) {
        res.status(404).json({ status: 404, message: err });
      }
      break;
    case "geek":
      try {
        const geekJoke = await getGeekJoke();
        return geekJoke;
        //   return   res.status(200).json({ status: 200, joke: geekJoke });
      } catch (err) {
        res.status(404).json({ status: 404, message: err });
      }
      break;

    default:
      res.status(404).json({ status: 404, message: err });
  }
};

module.exports = { handleJoke };
