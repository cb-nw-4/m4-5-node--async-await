// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve, reject) => {
      console.log("2 second wait...");
      setTimeout(()=> resolve(2 * num), 2000)
  });
};

// 3. handleSum function (async/await)

handleSum = async (num) => {
  let theSum = 0;
  
  const result1 = await doublesLater(num);
  theSum += result1;
  const result2 = await doublesLater(result1);
  theSum += result2;
  const result3 = await doublesLater(result2);
  theSum += result3;
  return theSum;
}

// 4. verification

handleSum(10).then((ans) => console.log(ans));
