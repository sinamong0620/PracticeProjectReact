import { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState(""); //사용자 이름
  const [userAge, setUserAge] = useState(""); //사용자 나이

  const AddUserName = (e) => {
    setUserName(e.target.value);
  };
  const AddUserAge = (e) => {
    setUserAge(e.target.value);
  };
  const SubmitUserForm = (e) => {
    e.preventDefault();

    const expenseData = {
      name: userName,
      age: userAge,
    };

    props.onSaveExpenseData(expenseData);
  };
  return (
    <>
      <div className={styles.adduserform}>
        <form onSubmit={SubmitUserForm}>
          <label>Username</label>
          <div>
            <input type="text" onChange={AddUserName} />
          </div>

          <label>Age(Years)</label>
          <div>
            <input type="text" onChange={AddUserAge} />
          </div>

          <button>Add User</button>
        </form>
      </div>
    </>
  );
};
export default AddUser;
