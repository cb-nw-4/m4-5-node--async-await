// Exercise 3
// ----------

const doublesLater = (num) => {
    return new Promise(function(resolve) {
        console.log(num * 2);
        setTimeout(() => resolve(num * 2), 2000);
    });
};

const handleSum = async(num) => {
    try {
        const a = await doublesLater(num); //4
        const b = await doublesLater(a); //8
        const c = await doublesLater(b); //16

        const ans = a + b + c;
        return ans;
    } catch (err) {
        console.log(err);
    }
};

handleSum(2).then((ans) => console.log(ans));

// 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
// 2. returns the double of the num
// 3. handleSum function (async/await)
// 4. verification