// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
    console.log('wait 2 seconds')

  // 2. returns the double of the num

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num * 2)
    , 2000)
      })
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  let theSum = 0;
  try{
    let a = await doublesLater(num);
    theSum += a;
    console.log(`result is ${theSum}`)

    let b = await doublesLater(a);
    theSum += b;
    console.log(`result is ${theSum}`)
    let c = await doublesLater(b);
    theSum += c;
    return theSum;

  }
  catch (err) {
    console.log(err);
  }

}

// const handleSum = (num) => {
//   let theSum = 0;
//   return new Promise((resolve) => {
//     doublesLater(num).then((a) => {
//       theSum += a;
//       doublesLater(a).then((b) => {
//         theSum += b;
//         doublesLater(b).then((c) => {
//           theSum += c;
//           resolve(theSum);
//         });
//       });
//     });
//   });
// };

// 4. verification
handleSum(10).then((ans) => console.log(ans));
