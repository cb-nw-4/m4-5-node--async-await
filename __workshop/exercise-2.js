// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require('request-promise');

const getIssPosition = async () => {
  try {
    const response = await request('http://api.open-notify.org/iss-now.json');
    const issLocation = JSON.parse(response);
 
    return {
      lat: parseFloat(issLocation.iss_position.latitude),
      lng: parseFloat(issLocation.iss_position.longitude)
    };
  } catch (err) {
    console.log('Error: ', err);
  }
};

const handleGetIssPosition =  async () => {
  console.log(await getIssPosition());
};

handleGetIssPosition();

