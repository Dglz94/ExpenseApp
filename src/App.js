import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/form/Form";
import List from "./components/List/List";

function App() {
  const [budget, setBudget] = useState(1000);
  const [expenses, setExpenses] = useState([
    { name: "Comida", category: "Home", amount: 100 },
  ]);
  const categories = ["Home", "Medic", "Food", "Extra", "Other"];
  const getTotalExpenses = (expenses) => {
    let total = 0;
    expenses.map((expense) => {
      total = total + expense.amount;
    });
    return total;
  };

  const [totalExpenses, setTotalExpenses] = useState(
    getTotalExpenses(expenses)
  );

  const handleAddExpenses = (expense) => {
    setExpenses([...expenses, expense]);
  };

  useEffect(() => {
    setTotalExpenses(getTotalExpenses(expenses));
  }, [expenses]);

  const getExpenesesByCategory = (category) => {
    return expenses.filter((item) => item.category === category);
  };

  return (
    <div className="App">
      <div className="mainContainer col-9">
        <h1 className="title">Expense Tracker</h1>
        <div className="resume">
          <div className="">
            <label>Budget $</label>
            <input
              type="number"
              placeholder="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div>
            <span>Your initial Budget: {budget}</span>
          </div>
          <div>
            <span>Balance: {budget - totalExpenses}</span>
          </div>
          <div
            className={
              (totalExpenses / budget) * 100 > 50 ? "bg-red" : "bg-green"
            }
          >
            <span>Budget Expended: {(totalExpenses / budget) * 100}%</span>
          </div>
        </div>

        <div className="formContainer">
          <Form categories={categories} handleAddExpenses={handleAddExpenses} />
        </div>
        <div>
          <h2 className="expense-title">Expenses</h2>
          <div className="neuph col-10 m-auto">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Category</th>
                </tr>
              </thead>
              <tbody>
                {expenses?.map((expense, index) => {
                  return (
                    <tr key={index}>
                      <td key={`a${index}`}>{expense.name}</td>
                      <td key={`b${index}`}>{expense.amount}</td>
                      <td key={`c${index}`}>{expense.category}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {categories.map((category) => {
            const expenses = getExpenesesByCategory(category);
            if (expenses.length > 0) {
              return (
                <div>
                  <h2>{category}</h2>
                  <List data={expenses} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
