const { getDadJoke } = require('./__workshop/exercise-4.1.js');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2.js');
const { getGeekJoke } = require('./__workshop/exercise-4.3.js');

const handleJoke = async (req, res) => {
    let type = req.params.type;
    switch (type) {
        case 'dad':
            res.status(200).json({
                status: 200,
                joke: await getDadJoke()
            })
            break;
        case 'tronald':
            res.status(200).json({
                status: 200,
                joke: await getTronaldDumpQuote()
            })
            break;
        case 'geek':
            res.status(200).json({
                status: 200,
                joke: await getGeekJoke()
            })
            break;
        default:
            res.status(400).json({
                status: 400,
                message: 'We don\'t have that joke type here!'
            })
    }
}
module.exports = { handleJoke };

// import functions (with function names) from 4.1-3
// make function handleJoke an async/await promise that receives the type from the url and does a switch case to determine which function to run


