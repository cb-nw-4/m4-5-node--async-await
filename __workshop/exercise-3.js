// Exercise 3
// ----------

const doublesLater = (num) => {
  let doubledNum = new Promise((resolve) => {
    console.log('just wait...');
    setTimeout(() => resolve(num * 2), 2000);
  })
  return doubledNum;
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    const result1 = await doublesLater(num);
    const result2 = await doublesLater(result1);
    const result3 = await doublesLater(result2);
    console.log(result3);
  } catch(err) {
    console.log(err);
  }
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));
