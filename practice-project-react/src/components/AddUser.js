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

    if (userName !== "" && userAge !== "" && Number(userAge) > 0) {
      props.onSaveExpenseData(expenseData);
    } else {
      const msg =
        userName === ""
          ? "Please enter a valid name and age"
          : userAge === ""
          ? "Please enter a valid name and age"
          : userAge <= 0
          ? "Please enter a valid age (> 0)"
          : "";
      props.onSaveErrorMessageData(msg);
    }
    setUserName("");
    setUserAge("");
  };
  return (
    <>
      <div className={styles.adduserform}>
        <form onSubmit={SubmitUserForm}>
          <label>Username</label>
          <div>
            <input type="text" value={userName} onChange={AddUserName} />
          </div>

          <label>Age(Years)</label>
          <div>
            <input type="text" value={userAge} onChange={AddUserAge} />
          </div>

          <button>Add User</button>
        </form>
      </div>
    </>
  );
};
export default AddUser;
