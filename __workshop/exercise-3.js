// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise(function(resolve) {
    const sum = num * 2;
    setTimeout(() => resolve(sum), 2000)
  })

};
const handleSum = async (num) => {
try {
  const ans = await doublesLater(num);
  console.log(ans);
}
catch (err) {
console.log("error")
}
}



handleSum(20);


  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num

// 3. handleSum function (async/await)

// 4. verification