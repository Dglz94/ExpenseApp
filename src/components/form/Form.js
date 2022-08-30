import React, { useState } from "react";

function Form({ handleAddExpenses, categories }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("Home");



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category);
    const newExp = {
      name: name,
      amount: parseInt(amount),
      category: category,
    };
    handleAddExpenses(newExp);
    setName("");
    setAmount(0);
    setCategory("Home");
  };
  return (
      <form onSubmit={handleSubmit} className="form neuph">
          <label className="p-3" for="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>

        <button type="submit" className="col-1 btn btn-light">
          Add
        </button>
      </form>
  );
}

export default Form;
