import React,{useEffect,useState} from 'react';
import Web3 from 'web3'
import './App.css';

const App = () => {
  const [account,setAccount] = useState();
  const [network,setNetwork] = useState();
  useEffect(()=>{
    const ethData = loadBlockchainData()
  },[])

  const loadBlockchainData = async ()=>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    const myAccount = await web3.eth.getAccounts()
    setAccount(myAccount[0])
    setNetwork(network)
  }
  return (
    <div className="container">
      <h1>Hello World</h1>
      <p>{`Your Account: ${account} is connected to the ${network} network`}</p>
    </div>
  );
}

export default App;
