import FormContainer2 from "./form-container2";
import styles from "./projection-area-chart-form1.module.css";
const ProjectionAreaChartForm1 = () => {
  return (
    <div className={styles.projectionAreaChart}>
      <div className={styles.bg} />
      <div className={styles.barChartGrid}>
        <FormContainer2 />
        <img className={styles.areaIcon} alt="" src="/area.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.materialName}>Aggregate Blue Metal 20 mm</div>
      <div className={styles.tittle}>projected price change</div>
    </div>
  );
};

export default ProjectionAreaChartForm1;
