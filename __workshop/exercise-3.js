// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise((resolve, reject) => {
    console.log("2 second wait...");
    setTimeout(()=> resolve(2 * num), 2000)
});
};
// 3. handleSum function (async/await)
handleSum = async (num) => {
  

  const double1 = await doublesLater(num);
  const double2 = await doublesLater(double1);
  const double3 = await doublesLater(double2);
  return double3;
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));
