import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./logout-form.module.css";
const LogoutForm = () => {
  const router = useRouter();

  const onNavButtonLogOutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNavButtonAboutClick = useCallback(() => {
    router.push("/../pages/desktop-about-us");
  }, [router]);

  const onNavButtonContactClick = useCallback(() => {
    router.push("/../pages/desktop-contact");
  }, [router]);

  const onNavButtonSettingClick = useCallback(() => {
    router.push("/../pages/desktop-dashboard-night");
  }, [router]);

  return (
    <div className={styles.navBar}>
      <div className={styles.bg} />
      <nav
        className={styles.navButtonLogOut}
        id="log out"
        onClick={onNavButtonLogOutClick}
      >
        <div className={styles.logOut}>log out</div>
        <img className={styles.iconsLogOut} alt="" src="/icons--log--out.svg" />
        <img
          className={styles.iconsArrowIosRight}
          alt=""
          src="/icons--arrow--ios--right.svg"
        />
      </nav>
      <nav
        className={styles.navButtonAbout}
        id="about"
        onClick={onNavButtonAboutClick}
      >
        <div className={styles.logOut}>about</div>
        <img className={styles.iconsLogOut} alt="" src="/icons--info.svg" />
        <img
          className={styles.iconsArrowIosRight}
          alt=""
          src="/icons--arrow--ios--right.svg"
        />
      </nav>
      <nav
        className={styles.navButtonContact}
        id="contact"
        onClick={onNavButtonContactClick}
      >
        <div className={styles.contact}>contact</div>
        <div className={styles.iconsRecording} />
        <img
          className={styles.iconsArrowIosRight2}
          alt=""
          src="/icons--arrow--ios--right.svg"
        />
        <img className={styles.colorIcon} alt="" src="/color.svg" />
      </nav>
      <nav
        className={styles.navButtonSetting}
        id="night mode"
        onClick={onNavButtonSettingClick}
      >
        <div className={styles.nightMode}>Night mode</div>
        <img
          className={styles.iconsSettingsSetting2}
          alt=""
          src="/icons--settings--setting-2.svg"
        />
        <img
          className={styles.iconsArrowIosRight3}
          alt=""
          src="/icons--arrow--ios--right.svg"
        />
        <div className={styles.bubble}>
          <div className={styles.bubbleBg} />
          <div className={styles.dayMode}>day mode</div>
          <div className={styles.nightMode1}>Night mode</div>
        </div>
      </nav>
      <nav className={styles.navButtonDashboard} id="dashboard">
        <div className={styles.contact}>dashboard</div>
        <img className={styles.colorIcon1} alt="" src="/color1.svg" />
        <img
          className={styles.iconsArrowIosRight2}
          alt=""
          src="/icons--arrow--ios--right.svg"
        />
      </nav>
      <div className={styles.elementsUserUser1}>
        <div className={styles.user}>
          <div className={styles.name}>User, hello!</div>
          <img className={styles.photoIcon} alt="" src="/photo.svg" />
        </div>
      </div>
    </div>
  );
};

export default LogoutForm;
