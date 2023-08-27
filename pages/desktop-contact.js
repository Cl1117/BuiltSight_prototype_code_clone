import ContactUsFormContainer from "../components/contact-us-form-container";
import NightModeForm from "../components/night-mode-form";
import styles from "./desktop-contact.module.css";
const DesktopContact = () => {
  return (
    <div className={styles.desktopcontact}>
      <div className={styles.footer}>
        <div className={styles.rectangleCopy103} />
        <div className={styles.logworkAllR}>BuiltSight 2023</div>
      </div>
      <ContactUsFormContainer />
      <div className={styles.navBar}>
        <NightModeForm />
      </div>
      <div className={styles.heading}>
        <div className={styles.subTittle}>contact</div>
        <div className={styles.tittle}>
          Australia's Construction Material Price Tracker
        </div>
      </div>
    </div>
  );
};

export default DesktopContact;
