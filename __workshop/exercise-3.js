// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve((num *= 2));
      console.log(num);
    }, 2000);
  });
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    const firstResult = await doublesLater(num);
    const secondResult = await doublesLater(firstResult);
    const thirdResult = await doublesLater(secondResult);
    let sum = firstResult + secondResult + thirdResult;
    return sum;
  } catch (err) {
    console.log(err);
  }
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
//doublesLater(4);
