// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require('request-promise');

const getIssPosition = async () => {
  try {
    const response = await request('https://api.open-notify.org/iss-now.json');
    const issLocation = JSON.parse(response);
    return {
      lat: issLocation.iss_position.latitude,
      lng: issLocation.iss_position.latitude,
    };
  } catch (err) {
    console.log('Error: ', err);
  }
};

console.log(getIssPosition());
