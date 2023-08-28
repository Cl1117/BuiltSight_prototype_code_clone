import { useCallback } from "react";
import ContainerCard from "../components/container-card";
import { useRouter } from "next/router";
import UserCardForm from "../components/user-card-form";
import styles from "./desktop-about-us.module.css";
const DesktopAboutUs = () => {
  const router = useRouter();

  const onNavButtonContainer1Click = useCallback(() => {
    router.push("/../pages/desktop-dashboard");
  }, [router]);

  const onNavButtonContainer3Click = useCallback(() => {
    router.push("/../pages/desktop-contact");
  }, [router]);

  const onNavButtonContainer4Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.desktopaboutUs}>
      <div className={styles.footer}>
        <div className={styles.rectangleCopy103} />
        <div className={styles.logworkAllR}>BuiltSight 2023</div>
      </div>
      <ContainerCard />
      <div className={styles.heading}>
        <div className={styles.subTittle}>about us</div>
        <div className={styles.tittle}>
          Australia's Construction Material Price Tracker
        </div>
      </div>
      <div className={styles.navBar}>
        <div className={styles.navBar1}>
          <div className={styles.bg} />
          <div className={styles.navButton}>
            <div className={styles.nightMode}>
              <p className={styles.nightMode1}>night mode</p>
            </div>
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
          <div
            className={styles.navButton1}
            onClick={onNavButtonContainer1Click}
          >
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
            <div className={styles.about}>about</div>
            <img className={styles.iconsInfo} alt="" src="/icons--info.svg" />
            <img
              className={styles.iconsArrowIosRight2}
              alt=""
              src="/icons--arrow--ios--right.svg"
            />
          </div>
          <div
            className={styles.navButton3}
            onClick={onNavButtonContainer3Click}
          >
            <div className={styles.dashboard}>contact</div>
            <div className={styles.iconsRecording} />
            <img
              className={styles.iconsArrowIosRight1}
              alt=""
              src="/icons--arrow--ios--right.svg"
            />
            <img className={styles.colorIcon1} alt="" src="/color.svg" />
          </div>
          <div
            className={styles.navButton4}
            onClick={onNavButtonContainer4Click}
          >
            <div className={styles.about}>log out</div>
            <img
              className={styles.iconsInfo}
              alt=""
              src="/icons--log--out.svg"
            />
            <img
              className={styles.iconsArrowIosRight2}
              alt=""
              src="/icons--arrow--ios--right.svg"
            />
          </div>
          <UserCardForm dimensionCode="/photo4.svg" />
        </div>
      </div>
    </div>
  );
};

export default DesktopAboutUs;
