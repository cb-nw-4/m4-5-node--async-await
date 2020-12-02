// Exercise 1
// ------------

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === 'string')
      ? resolve(array.map((word) => word.toUpperCase()))
      : reject('Error: Not all items in the array are strings!');
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === 'string')
      ? resolve(array.sort())
      : reject('Error: Something went wrong with sorting words.');
  });
};

const textTransform = async (array) => {
  // here
  try{
    let inCaps = await makeAllCaps(array);
    let sorted = await sortWords(inCaps);
    console.log(sorted);
  }
  catch(error){
    console.log(error);
  }

};

textTransform(['cucumber', 'tomatos', 'avocado']);
textTransform(['cucumber', 44, true]);
