
const { getDadJoke } = require('./__workshop/exercise-4.1');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getGeekJoke } = require('./__workshop/exercise-4.3');

// nothing here yet...

const handleJoke = async (requestedType) =>{

    try{
        if(requestedType == 'dad'){
            return await getDadJoke()
        }else if(requestedType =='tronald'){
            return await getTronaldDumpQuote()
        } else if(requestedType == 'greek'){
            return await getGeekJoke()
        }
    }catch(err){

        console.log(err) 
    }

}


module.exports = {handleJoke}
