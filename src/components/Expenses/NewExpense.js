import "./NewExpense.css";
import { useState } from "react";

function NewExpense() {
  const [intitle, setTitle] = useState("");
  const [inamount, setAmount] = useState(0);
  const [indate, setDate] = useState(""); //When the state is activated, react will skip this 3 functions and refresh the bottom code

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const expenseDate = {
      title: intitle,
      amount: inamount,
      date: new Date(indate),
    };
    setDate("");
    setTitle("");
    setAmount("");
  }
  return (
    <form className="new-expense" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={intitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inamount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={indate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpense;
