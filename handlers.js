const { getDadJoke } = require('./__workshop/exercise-4.1');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getGeekJoke } = require('./__workshop/exercise-4.3');

const handleJoke = async (req, res) => {
    const jokeType = req.params.type;
    if (jokeType === 'dad') {
        res.status(200).json({ status: 200, joke: await getDadJoke() });
    }
    else if (jokeType === 'tronald') {
        res.status(200).json({ status: 200, joke: await getTronaldDumpQuote() });
    }
    else if (jokeType === 'geek') {
        res.status(200).json({ status: 200, joke: await getGeekJoke() });
    }
}

module.exports = { handleJoke };
