import React, { useEffect, useState,useContext,useCallback } from "react";
import Web3 from "web3";
import { TODO_LIST_ADDRESS, TODO_LIST_ABI } from "./config.js";
import TodoList from "./components/TodoList";
import FormList from "./components/FormList";
import {TaskContext} from "./context/tasks-context"
import "./App.css";

const App = () => {
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [contract, setContract] = useState();
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const context = useContext(TaskContext)

  useEffect(() => {
    const loadBlockchainData = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const network = await web3.eth.net.getNetworkType();
      const myAccount = await web3.eth.getAccounts();
      setAccount(myAccount[0]);
      setNetwork(network);
      const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
      setContract(todoList);
      const taskCount = await todoList.methods.taskCount().call();
      setCount(taskCount);
      for (let i = 1; i <= taskCount; i++) {
        const task = await todoList.methods.tasks(i).call();
        context.tasks[i-1]= task
      }
      setLoading(false);
    };
    loadBlockchainData()

  },[]);

  

  const createTask =useCallback((content) => {
    setLoading(true);
    contract.methods
      .createTask(content)
      .send({ from: account })
      .once("receipt", (receipt) => {
        setLoading(false);
      });
  });

  const toggleCompleted =useCallback((taskId) => {
    setLoading(true);
    contract.methods
      .toggleCompleted(taskId)
      .send({ from: account })
      .once("receipt", (receipt) => {
        setLoading(false);
      });
    
  });

  return (
    <div className="container">
      <FormList createTask={createTask} />
      <TodoList toggleCompleted={toggleCompleted}/>
    </div>
  );
};

export default App;
