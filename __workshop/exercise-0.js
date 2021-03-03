// The Promise
const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        num > 10 ?
            resolve(num + " is greater than 10, success!") :
            reject(num + " is less than 10, error!");
    });
};

const handleCompareToTen = async(num) => {
    try {
        const result = await compareToTen(num);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

// Calling the function (that uses the Promise)
// compareToTen(14)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// compareToTen(7)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

handleCompareToTen(15);
handleCompareToTen(8);