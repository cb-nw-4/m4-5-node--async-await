// nothing here yet...
const { getDadJoke } = require('./__workshop/exercise-4.1');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getGeekJoke } = require('./__workshop/exercise-4.3');

const handleJoke = async (req, res) => {
    if (typeof req.params.type !== "string"){
        res.status(404).json({ status: 404, message: "Unrecognized joke type" });
    }

    switch (req.params.type.toLowerCase()) {
        case 'dad':
            try {
                const dadJoke = await getDadJoke();
                res.status(200).json({ status: 200,  joke: dadJoke });
            } catch (err) {
                res.status(404).json({ status: 404, message: err });
            }
           break;
        case 'geek':
            try {
                const geekJoke = await getGeekJoke();
                res.status(200).json({ status: 200,  joke:  geekJoke });
            } catch (err) {
                res.status(404).json({ status: 404, message: err });
            }
            break;
        case 'tronald':
            try {
                const tronaldJoke = await getTronaldDumpQuote();
                res.status(200).json({ status: 200,  joke: tronaldJoke });
            } catch (err) {
                res.status(404).json({ status: 404, message: err });
            }
            break;
        default:
            res.status(404).json({ status: 404, message: "Unrecognized joke type" });
    }

};

module.exports = { handleJoke };