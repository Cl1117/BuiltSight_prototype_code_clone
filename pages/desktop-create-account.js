import AccountFormContainer from "../components/account-form-container";
import WelcomeCard from "../components/welcome-card";
import styles from "./desktop-create-account.module.css";
const DesktopCreateAccount = () => {
  return (
    <div className={styles.desktopcreateAccount}>
      <div className={styles.footer}>
        <div className={styles.rectangleCopy103} />
        <div className={styles.logworkAllR}>BuiltSight 2023</div>
      </div>
      <div className={styles.container}>
        <AccountFormContainer />
      </div>
      <WelcomeCard />
    </div>
  );
};

export default DesktopCreateAccount;
