// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise(function(resolve) {
    console.log("Wait 2 seconds.");
    setTimeout(() => resolve(2 * num), 2000);
  });
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  let theSum = 0;
  try {
    let firstNumber = await doublesLater(num);
    theSum += firstNumber;
    console.log(theSum);

    let secondNumber = await doublesLater(num);
    theSum += secondNumber;
    console.log(theSum);

    let thirdNumber = await doublesLater(num);
    theSum += thirdNumber;
    return theSum;
    
  } catch (err) {
    console.log(err);
  }
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));



