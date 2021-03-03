// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

const getIssPosition = async() => {
    try {
        const response = await request("http://api.open-notify.org/iss-now.json");
        //console.log(response);
        const issLocation = await JSON.parse(response);
        const issLocationObj = await issLocation.iss_position;
        //console.log(issLocationObj);
        const replacementKeys = { latitude: "lat", longitude: "lng" };
        let replacedItems = Object.keys(issLocationObj).map((key) => {
            const newKey = replacementKeys[key] || key;
            return {
                [newKey]: issLocationObj[key],
            };
        });
        const newObject = replacedItems.reduce((a, b) => Object.assign({}, a, b));
        return console.log(newObject);
    } catch (err) {
        console.log("Error: ", err);
    }
};

getIssPosition();