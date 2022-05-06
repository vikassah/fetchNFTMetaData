//USAGE:
//node fetchNFTMetaData.js <contractAdr> <token id>

const axios = require("axios");
require("dotenv").config();

const myargs = process.argv.slice(2);

if(myargs.length != 2) {
  console.log("USAGE: node fetchNFTMetaData.js <contractAdr> <token id>")
}
else {
  const contractAddr = myargs[0];
  const tokenId = myargs[1];
  const tokenType = 'erc721';

  const apiKey = process.env.ALCHEMY_KEY;
  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTMetadata`;


  var config = {
    method: 'get',
    url: `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}&tokenType=${tokenType}`,
    headers: { }
  };

  // call to get the metadata and other attributes and console log them
  axios(config)
  .then(response => console.log(JSON.stringify(response.data, null, 2)))
  .catch(error => console.log(error));
}