To start the project proceed to backend folder first

## Available Scripts

In the backend directory, you can run:

### 1: `npm install`

Install all dependencies then 

### 2: `truffle compile`

Compile all contracts ensure ganache is running and connected to port 8545

### 3:`truffle migrate --reset`

Migrate the smart contracts to the blockchain. Find the build/contracts folder and copy the abi of the TodoList.json also take not of the contracts address.

Proceed to the frontend folder and copy the abi into config.js in the root directory of frontend

### 4: `npm start`

Run npm start and wait for localhost:3000 to pop up and you can start interacting with the smart contract.

Ensure MetaMask is connected to the web browser.
