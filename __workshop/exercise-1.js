// Exercise 1
// ------------

// const array = ["Chocolate", "Apple", "Banana"];
// const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        array.every((word) => typeof word === "string") ?
            resolve(array.map((word) => word.toUpperCase())) :
            reject("Error: Not all items in the array are strings!");
    });
};

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        array.every((word) => typeof word === "string") ?
            resolve(array.sort()) :
            reject("Error: Something went wrong with sorting words.");
    });
};

const textTransform = async(array) => {
    try {
        const capsResult = await makeAllCaps(array);
        //console.log(capsResult);
        const sortResult = await sortWords(capsResult);
        console.log(sortResult);
    } catch (err) {
        console.log(err);
    }
};

textTransform(["cucumber", "tomatos", "avocado"]);

textTransform(["cucumber", 44, true]);

// makeAllCaps(array)
//     .then(sortWords)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// makeAllCaps(complicatedArray)
//     .then(sortWords)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));