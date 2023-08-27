import Statevisible from "./statevisible";
import styles from "./result-container.module.css";
const ResultContainer = ({ showResultRow }) => {
  return (
    <div className={styles.resultSection}>
      <div className={styles.bg} />
      <Statevisible
        statevisiblePosition="absolute"
        statevisibleTop="104px"
        statevisibleLeft="27px"
      />
      <div className={styles.tableHead}>
        <div className={styles.bg1} />
        <div className={styles.materialName}>{`Material name `}</div>
        <div className={styles.unit}>Unit</div>
        <div className={styles.priceChangeIn}>Price change in %</div>
      </div>
      <div className={styles.tittle}>result</div>
    </div>
  );
};

export default ResultContainer;
