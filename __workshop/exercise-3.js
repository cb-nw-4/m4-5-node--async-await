// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("2 seconds");
      resolve(num * 2);
    }, 2000)
  }
  )}

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    let sum = 0;
    let result = await doublesLater(num)
    sum += result;
  
    let result2 = await doublesLater(result)
    sum += result2;
    
    let result3 = await doublesLater(result2);
    sum += result3;
   
    console.log(sum);
  } catch(err) {
    console.log(`error, ${err}`);
  }
};

// 4. verification
handleSum(10);
