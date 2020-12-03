// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require('request-promise');

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const issLocation = JSON.parse(response);
    const parsedResponse = issLocation.iss_position;
    return {
      lat: parsedResponse.latitude,
      lng: parsedResponse.longitude,
    };
  
  } catch (err) {
    console.log('Error: ', err);
  }
};

const handleGetIssPosition = async () => {
console.log( await getIssPosition());
} 
handleGetIssPosition();