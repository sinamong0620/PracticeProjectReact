import styles from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <div
      className={styles.userInfo}
    >{`${props.userName} (${props.userAge} years old)`}</div>
  );
};
export default UserInfo;
