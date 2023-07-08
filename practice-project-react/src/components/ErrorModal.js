import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div
      className={styles.errorModal}
      onClick={() => {
        props.onSaveShowModal(false);
      }}
    >
      <div className={styles.errorModalContainer}>
        <h1 className={styles.errorModalTitle}>Invalid input</h1>
        <div className={styles.errorModalContent}>
          <div>{`${props.errorMsg}`}</div>
          <button
            className={styles.errorModalButton}
            onClick={() => {
              props.onSaveShowModal(false);
            }}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
