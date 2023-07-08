import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserInfo from "./components/UserInfo";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [userInfo, setUserInfo] = useState([]); //왜 []이렇게 설정해야 잘 저장이 되는거지..?
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  const saveShowModal = (modalValue) => {
    setShowModal(modalValue);
  };
  const saveErrorMessageData = (enteredErrorMessage) => {
    setErrorMsg(enteredErrorMessage);
    setShowModal(true);
  };
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
      <AddUser
        onSaveExpenseData={saveExpenseDataHandler}
        onSaveErrorMessageData={saveErrorMessageData}
      />
      <div className="userInfoDiv">
        {userInfo.map((expense) => {
          return (
            <UserInfo
              key={expense.id}
              userName={expense.name}
              userAge={expense.age}
            />
          );
        })}
      </div>
      {showModal && (
        <ErrorModal errorMsg={errorMsg} onSaveShowModal={saveShowModal} />
      )}
    </div>
  );
}

export default App;
