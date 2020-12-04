// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise((res,rej)=> { 
    setTimeout(()=>{ 
      console.log('Times up');
      res(num*2);
    }, 2000);
  }); 
};

// 3. handleSum function (async/await)
const handleSum = async (num)=> {
  try {
    const result = await doublesLater(num); 
    const result2 = await doublesLater(result); 
    const result3 = await doublesLater(result2); 
    return result3; 
  } catch(err) {
    console.log('Error: ', err);
  }; 
}; 


// 4. verification
handleSum(10).then((ans) => console.log(ans));
