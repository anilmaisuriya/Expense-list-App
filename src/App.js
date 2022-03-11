import React from "react";
import Expenses from "./componants/Expenses";
import './componants/App.css';



function App() {

  let expenses=[
    {
      id:"1",
      date: new Date(2022, 3, 9),
      title:"House Rent",
      amount: 1000,
    },
    {
      id:"2",
      date: new Date(2022, 3, 10),
      title:"Electricity bill",
      amount: 2500,
    },
    {
      id:"3",
      date: new Date(2022, 3, 11),
      title:"Food",
      amount: 8000,
    },
    {
      id:"4",
      date: new Date(2022, 3, 12),
      title:"Other Expenses",
      amount: 2000,
    }
  ];

  return (
<div>
    <h1 className="heading">Monthly Expenses</h1>
    <Expenses item={expenses}/>
  </div>
  );



}

export default App;

