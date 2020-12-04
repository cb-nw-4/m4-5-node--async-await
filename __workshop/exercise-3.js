// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(num * 2), 2000);
  });
};

handleSum = async (num) => {
  for (let i = 1; i < 4; i++) {
    num = await doublesLater(num);
  }
  return num;
}

handleSum(10).then((ans) => console.log(ans));
