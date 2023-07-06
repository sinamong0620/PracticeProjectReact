import styles from "./AddUser.module.css";

const AddUser = () => {
  return (
    <>
      <div className={styles.adduserform}>
        <form>
          <label>Username</label>
          <div>
            <input type="text" />
          </div>

          <label>Age(Years)</label>
          <div>
            <input type="text" />
          </div>
        </form>
        <button>Add User</button>
      </div>
    </>
  );
};
export default AddUser;
