// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num

  console.log('Just taking my time...')

  return new Promise((resolve, reject) => {
    if (typeof num === 'number') {
      setTimeout(() => {
        resolve(num * 2)
      }, 2000)
    } else {
      reject('Error! This is not a number!')
    }
  })
};

doublesLater(10);
// 3. handleSum function (async/await)

const handleSum = async (num) => {
  try {
    const num1 = await doublesLater(num);
    const num2 = await doublesLater(num1);
    const num3 = await doublesLater(num2);
    let sum = num1 + num2 + num3;
    console.log(sum)
  } catch (err) {
    console.log(err)
  }
}

// // 4. verification
handleSum(10).then((ans) => console.log(ans));