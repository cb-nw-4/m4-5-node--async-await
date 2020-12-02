const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  // write write write
  let response = await request({
    uri: "https://api.tronalddump.io/random/quote",
    headers: { accept: "application/json" },
  });
  let parsed = JSON.parse(response);
  return parsed.value;
};

// getTronaldDumpQuote();

module.exports = { getTronaldDumpQuote };
