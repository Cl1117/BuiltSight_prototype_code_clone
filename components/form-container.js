import styles from "./form-container.module.css";
const FormContainer = ({ showHistiryRow }) => {
  return (
    <div className={styles.historySection}>
      <div className={styles.bg} />
      <img
        className={styles.historySectionChild}
        alt=""
        src="/rectangle-27.svg"
      />
      <div className={styles.historySectionItem} />
      {showHistiryRow && (
        <div className={styles.histiryRow}>
          <div className={styles.aggregateBlueMetal}>
            Aggregate Blue Metal 20 mm
          </div>
          <div className={styles.div}>+5%</div>
        </div>
      )}
      <div className={styles.tableHead}>
        <div className={styles.materialName}>{`Material name `}</div>
        <div className={styles.priceChange}>Price change</div>
      </div>
      <div className={styles.tittle}>Compare history</div>
    </div>
  );
};

export default FormContainer;
