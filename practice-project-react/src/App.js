import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserInfo from "./components/UserInfo";

function App() {
  const [userInfo, setUserInfo] = useState([]); //왜 []이렇게 설정해야 잘 저장이 되는거지..?
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    setUserInfo((prevExpense) => {
      return [...prevExpense, expenseData];
    });
    console.log(userInfo);
  };
  return (
    <div className="App">
      <AddUser onSaveExpenseData={saveExpenseDataHandler} />
      {/* {userInfo.length && <UserInfo />} */}
    </div>
  );
}

export default App;
