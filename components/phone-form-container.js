import styles from "./phone-form-container.module.css";
const PhoneFormContainer = () => {
  return (
    <div className={styles.carbonlocationFilledParent}>
      <img
        className={styles.carbonlocationFilledIcon}
        alt=""
        src="/carbonlocationfilled.svg"
      />
      <div className={styles.bxsphoneCallParent}>
        <img
          className={styles.bxsphoneCallIcon}
          alt=""
          src="/bxsphonecall.svg"
        />
        <div className={styles.div}>
          +
          <a
            className={styles.a}
            href={`https://www.google.com/search?q=western+sydney+university&rlz=1C1RXQR_enAU1021AU1021&oq=weste&aqs=chrome.1.69i57j69i59j69i60j69i65j69i60j69i65l2j69i60.3939j0j7&sourceid=chrome&ie=UTF-8#`}
            target="_blank"
          >
            <span className={styles.span}>1300 897 669</span>
          </a>
        </div>
      </div>
      <div className={styles.icsharpEmailParent}>
        <img
          className={styles.icsharpEmailIcon}
          alt=""
          src="/icsharpemail.svg"
        />
        <div className={styles.builtsightgmailcom}>builtsight@gmail.com</div>
      </div>
      <div className={styles.parramattaNsw2116}>Parramatta NSW 2116</div>
    </div>
  );
};

export default PhoneFormContainer;
