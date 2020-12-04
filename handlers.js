// nothing here yet...
const { getDadJoke } = require('./__workshop/exercise-4.1');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getGeekJoke } = require('./__workshop/exercise-4.3');

const handleJoke = async (joke) => {
    switch (joke.toLowerCase()) {
        case 'dad':            
                return await getDadJoke(); 
        case 'geek':           
                return await getGeekJoke();      
        case 'tronald':
                return await getTronaldDumpQuote();            
        default:
            return -1;
    };
}

module.exports = { handleJoke };