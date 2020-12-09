// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  return new Promise((resolve) => {
    
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  }); // 2. returns the double of the num
};


// 3. handleSum function (async/await)

const handleSum = async (num) => {
  let firstDoubled = await doublesLater(num)
  let secondDoubled = await doublesLater(firstDoubled)
  let thirdDoubled = await doublesLater(secondDoubled)
  return thirdDoubled
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));


