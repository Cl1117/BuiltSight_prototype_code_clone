import styles from "./social-form-container.module.css";
const SocialFormContainer = ({ dimensionCode }) => {
  return (
    <div className={styles.social}>
      <div className={styles.delimiter}>
        <div className={styles.delimiterChild} />
        <div className={styles.orDoIt}>or do it via other accounts</div>
        <div className={styles.delimiterChild} />
      </div>
      <div className={styles.social1}>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src={dimensionCode} />
          <div className={styles.groupParent}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.groupChild} />
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.groupParent}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.groupChild} />
            </div>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFormContainer;
