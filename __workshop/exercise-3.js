// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(num*2), 3000)
  })
}

const handleSum = async (num) => {
  console.log("It might make the 2 second wait easier");

  let theSum = 0;

  const doublesLater = (num) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(num*2), 3000)
    })
  }

  const a = await doublesLater(num);
  const b = await doublesLater(a);
  const c = await doublesLater(b);
  return theSum = a + b + c;
};

// 3. handleSum function (async/await)

// 4. verification
handleSum(10).then((ans) => console.log(ans));
