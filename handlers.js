// nothing here yet...
const { getDadJoke } = require('./__workshop/exercise-4.1');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getGeekJoke } = require('./__workshop/exercise-4.3');

const handleJoke = async (req, res) => {
const type = req.params.type;
//console.log(type)

    if(type === 'dad') {
        res.send({status: 200, data: await getDadJoke()})
    } else if(type === 'tronald') {
        res.send({status: 200, data: await getTronaldDumpQuote()})
    } else if(type === 'geek') {
        res.send({status: 200, data: await getGeekJoke()})
    } else {
        res.send({status: 400, message: "Uh oh. Unrecognized joke type."})
    }
}


module.exports = { handleJoke };