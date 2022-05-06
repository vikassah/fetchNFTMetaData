# Fetch NFT metadata 

## Background

**What is NFT and what is nft metadata?**

NFT stands for non-fungible asset which represents a digital asset or digital equivalent representation of physical goods.

NFTs have certain properties associated with them which coudl be where the digital asset is stored, name, description and attributes (e.g. mounth: round, background: red etc.)

**How to get NFT metadata?**

Most of NFT metadata like attributes and digital asset are not stored on chain and leverage external storage like IPFS etc.

The goal of this is to fetch metadata associated with an NFT (which requires the NFT collection contract address and the specific NFT token ID). 

**Setup**

get the code using
`git clone git@github.com:vikassah/fetchNFTMetaData.git`

intall dependencies by running the following command in the root folder:
`npm install`

Get Alchemy API key for eth mainnet (alchemy is a free service to query blockchain data):
[Get Alchemy API key](https://medium.com/alchemy-api/getting-started-with-ethereum-development-using-alchemy-c3d6a45c567f)

Create a .env file in the root folder and create an environment variable for ALCHEMY_KEY like this:
`ALCHEMY_KEY=<your key here>`

**Run the code**

Fetch NFT meta data for any NFT contract and token ID by executing the script:
`node fetchNFTMetaData.js <contractAdr> <token id>`

You should see the output on the console.

Happy NFT checking!
