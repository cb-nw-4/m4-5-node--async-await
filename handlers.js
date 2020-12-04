// nothing here yet...

const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");
const { getDadJoke } = require("./__workshop/exercise-4.1");

const handleJoke = async (type,res) => { 
    if(type === "tronald") { 
        let quote = await getTronaldDumpQuote();
        res.status(200).json({
            status:200,
            data: quote,
        });
    } else if(type === "dad") { 
        let quote = await getDadJoke();
        res.status(200).json({
            status:200,
            data: quote,
        });
    } else if(type === "geek") { 
        let quote = await getGeekJoke();
        res.status(200).json({
            status:200,
            data: quote,
        });
    } else { 
        res.status(200).json({
            status:404,
            message: "Joke type not found"
        });
    }; 
};

module.exports = { handleJoke };