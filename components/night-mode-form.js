import { useCallback } from "react";
import { useRouter } from "next/router";
import UserCardForm from "./user-card-form";
import styles from "./night-mode-form.module.css";
const NightModeForm = () => {
  const router = useRouter();

  const onNavButtonContainer1Click = useCallback(() => {
    router.push("/../pages/desktop-dashboard");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    router.push("/../pages/desktop-about-us");
  }, [router]);

  const onNavButtonContainer4Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.navBar}>
      <div className={styles.bg} />
      <div className={styles.navButton}>
        <div className={styles.nightMode}>night mode</div>
        <img
          className={styles.iconsSettingsSetting2}
          alt=""
          src="/icons--settings--setting-2.svg"
        />
        <img
          className={styles.iconsArrowIosRight}
          alt=""
          src="/icons--arrow--ios--right.svg"
        />
        <div className={styles.bubble}>
          <div className={styles.bubbleBg} />
          <div className={styles.bubbleOp2}>Night mode</div>
          <div className={styles.bubbleOp1}>day mode</div>
        </div>
      </div>
      <div className={styles.navButton1} onClick={onNavButtonContainer1Click}>
        <div className={styles.dashboard}>dashboard</div>
        <img className={styles.colorIcon} alt="" src="/color2.svg" />
        <div className={styles.iconsHome} />
        <img
          className={styles.iconsArrowIosRight1}
          alt=""
          src="/icons--arrow--ios--right.svg"
        />
      </div>
      <div className={styles.navButton2}>
        <div className={styles.about} onClick={onAboutTextClick}>
          about
        </div>
        <img className={styles.iconsInfo} alt="" src="/icons--info.svg" />
        <img
          className={styles.iconsArrowIosRight2}
          alt=""
          src="/icons--arrow--ios--right.svg"
        />
      </div>
      <div className={styles.navButton3}>
        <div className={styles.dashboard}>contact</div>
        <div className={styles.iconsRecording} />
        <img
          className={styles.iconsArrowIosRight1}
          alt=""
          src="/icons--arrow--ios--right.svg"
        />
        <img className={styles.colorIcon1} alt="" src="/color.svg" />
      </div>
      <div className={styles.navButton4} onClick={onNavButtonContainer4Click}>
        <div className={styles.logOut}>log out</div>
        <img className={styles.iconsInfo} alt="" src="/icons--log--out.svg" />
        <img
          className={styles.iconsArrowIosRight2}
          alt=""
          src="/icons--arrow--ios--right.svg"
        />
      </div>
      <UserCardForm dimensionCode="/photo1.svg" />
    </div>
  );
};

export default NightModeForm;
