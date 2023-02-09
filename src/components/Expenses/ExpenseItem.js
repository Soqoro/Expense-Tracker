import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

//props or properties is basically the properties we define in app.js and we can use here
function ExpenseItem(props) {
  //Note the use of {} which is used to allow javascript expressions to be added to these JSX

  const [title, setTitle] = useState(props.title);
  //These are hooks and can only be called inside reaction functions. useState allow you to change values such as prop.title when eventhandler occurs
  //useState accepts a parameter and if that argument is changed, then React will call the component function again

  function clickHandler() {
    setTitle("Updated"); //Basically waht useState do is it returns a value for a variable and a function to update it, if that update function is called, the component is called again
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem; //export this function as the default for this file
