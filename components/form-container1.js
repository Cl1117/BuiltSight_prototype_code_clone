import { useMemo } from "react";
import UserCardForm from "./user-card-form";
import styles from "./form-container1.module.css";
const FormContainer1 = ({
  iconImageUrl,
  imageSize,
  imageCode,
  modeIconImageUrl,
  imageDimensions,
  imageCodeImageUrl,
  imageCodeDimensions,
  imageCodeImageUrl2,
  propCursor,
  onNavButtonLogOutClick,
  onNavButtonAboutContainerClick,
  onNavButtonContactContainerClick,
  onNavButtonSettingContainerClick,
  onNavButtonDashboardContainerClick,
}) => {
  const navButtonSettingStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.navBar}>
      <div className={styles.bg} />
      <div className={styles.navButtonLogOut} onClick={onNavButtonLogOutClick}>
        <div className={styles.logOut}>log out</div>
        <img className={styles.iconsLogOut} alt="" src="/icons--log--out.svg" />
        <img className={styles.iconsArrowIosRight} alt="" src={iconImageUrl} />
      </div>
      <div
        className={styles.navButtonAbout}
        onClick={onNavButtonAboutContainerClick}
      >
        <div className={styles.logOut}>about</div>
        <img className={styles.iconsLogOut} alt="" src="/icons--info.svg" />
        <img className={styles.iconsArrowIosRight} alt="" src={imageSize} />
      </div>
      <div
        className={styles.navButtonContact}
        onClick={onNavButtonContactContainerClick}
      >
        <div className={styles.contact}>contact</div>
        <div className={styles.iconsRecording} />
        <img className={styles.iconsArrowIosRight2} alt="" src={imageCode} />
        <img className={styles.colorIcon} alt="" src="/color.svg" />
      </div>
      <div
        className={styles.navButtonSetting}
        style={navButtonSettingStyle}
        onClick={onNavButtonSettingContainerClick}
      >
        <div className={styles.nightMode}>{modeIconImageUrl}</div>
        <img
          className={styles.iconsSettingsSetting2}
          alt=""
          src={imageDimensions}
        />
        <img
          className={styles.iconsArrowIosRight3}
          alt=""
          src={imageCodeImageUrl}
        />
        <div className={styles.bubble}>
          <div className={styles.bubbleBg} />
          <div className={styles.dayMode}>day mode</div>
          <div className={styles.nightMode1}>Night mode</div>
        </div>
      </div>
      <div
        className={styles.navButtonDashboard}
        onClick={onNavButtonDashboardContainerClick}
      >
        <div className={styles.contact}>dashboard</div>
        <img className={styles.colorIcon1} alt="" src="/color2.svg" />
        <div className={styles.iconsHome} />
        <img
          className={styles.iconsArrowIosRight2}
          alt=""
          src={imageCodeDimensions}
        />
      </div>
      <UserCardForm dimensionCode="/photo5.svg" />
    </div>
  );
};

export default FormContainer1;
