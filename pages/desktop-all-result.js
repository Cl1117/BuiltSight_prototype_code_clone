import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  Dropdown as BsDropdown,
  DropdownButton as BsDropdownButton,
  SplitButton as BsSplitButton,
} from "react-bootstrap";
import { useRouter } from "next/router";
import ProjectionAreaChartForm from "../components/projection-area-chart-form";
import FormSection1 from "../components/form-section1";
import FormContainer from "../components/form-container";
import ResultContainer from "../components/result-container";
import Stateinactive from "../components/stateinactive";
import OptionDefaultVisibleOption3 from "../components/option-default-visible-option3";
import OptionDefaultVisibleOption2 from "../components/option-default-visible-option2";
import OptionDefaultVisibleOption1 from "../components/option-default-visible-option1";
import OptionDefaultVisibleOption from "../components/option-default-visible-option";
import FormContainer1 from "../components/form-container1";
import styles from "./desktop-all-result.module.css";
const DesktopAllResult = () => {
  const [
    dropdownEndingDateDateTimePickerValue,
    setDropdownEndingDateDateTimePickerValue,
  ] = useState(null);
  const [
    dropdownStartingDateDateTimePickerValue,
    setDropdownStartingDateDateTimePickerValue,
  ] = useState(null);
  const router = useRouter();

  const onNavButtonLogOutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNavButtonAboutContainerClick = useCallback(() => {
    router.push("/../pages/desktop-about-us");
  }, [router]);

  const onNavButtonContactContainerClick = useCallback(() => {
    router.push("/../pages/desktop-contact");
  }, [router]);

  const onNavButtonSettingContainerClick = useCallback(() => {
    router.push("/../pages/desktop-dashboard");
  }, [router]);

  const onNavButtonDashboardContainerClick = useCallback(() => {
    router.push("/../pages/desktop-dashboard");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.desktopallResult}>
        <div className={styles.footer}>
          <div className={styles.rectangleCopy103} />
          <div className={styles.logworkAllR}>BuiltSight 2023</div>
        </div>
        <div className={styles.nightModeActiveBg} />
        <div className={styles.dayModeActiveBg} />
        <ProjectionAreaChartForm />
        <FormSection1 />
        <FormContainer showHistiryRow />
        <ResultContainer showResultRow />
        <Stateinactive
          stateinactivePosition="absolute"
          stateinactiveBorderRadius="unset"
          stateinactiveBackgroundColor="unset"
          stateinactiveWidth="unset"
          stateinactiveHeight="unset"
          stateinactiveDisplay="unset"
          stateinactiveFlexDirection="unset"
          stateinactivePadding="unset"
          stateinactiveBoxSizing="unset"
          stateinactiveAlignItems="unset"
          stateinactiveJustifyContent="unset"
          stateinactiveTop="264px"
          stateinactiveLeft="401px"
        />
        <OptionDefaultVisibleOption3
          optionDefaultVisibleOptioPosition="absolute"
          optionDefaultVisibleOptioBorderRadius="unset"
          optionDefaultVisibleOptioBackgroundColor="unset"
          optionDefaultVisibleOptioBorder="unset"
          optionDefaultVisibleOptioBoxSizing="unset"
          optionDefaultVisibleOptioWidth="unset"
          optionDefaultVisibleOptioDisplay="unset"
          optionDefaultVisibleOptioFlexDirection="unset"
          optionDefaultVisibleOptioPadding="unset"
          optionDefaultVisibleOptioAlignItems="unset"
          optionDefaultVisibleOptioJustifyContent="unset"
          optionDefaultVisibleOptioGap="unset"
          optionDefaultVisibleOptioTop="198px"
          optionDefaultVisibleOptioLeft="656px"
        />
        <OptionDefaultVisibleOption2
          optionDefaultVisibleOptioPosition="absolute"
          optionDefaultVisibleOptioBorderRadius="unset"
          optionDefaultVisibleOptioBackgroundColor="unset"
          optionDefaultVisibleOptioBorder="unset"
          optionDefaultVisibleOptioBoxSizing="unset"
          optionDefaultVisibleOptioWidth="unset"
          optionDefaultVisibleOptioDisplay="unset"
          optionDefaultVisibleOptioFlexDirection="unset"
          optionDefaultVisibleOptioPadding="unset"
          optionDefaultVisibleOptioAlignItems="unset"
          optionDefaultVisibleOptioJustifyContent="unset"
          optionDefaultVisibleOptioGap="unset"
          optionDefaultVisibleOptioTop="198px"
          optionDefaultVisibleOptioLeft="270px"
        />
        <OptionDefaultVisibleOption1
          optionDefaultVisibleOptioPosition="absolute"
          optionDefaultVisibleOptioBorderRadius="unset"
          optionDefaultVisibleOptioBackgroundColor="unset"
          optionDefaultVisibleOptioBorder="unset"
          optionDefaultVisibleOptioBoxSizing="unset"
          optionDefaultVisibleOptioHeight="unset"
          optionDefaultVisibleOptioFlexDirection="column"
          optionDefaultVisibleOptioPadding="unset"
          optionDefaultVisibleOptioAlignItems="unset"
          optionDefaultVisibleOptioJustifyContent="unset"
          optionDefaultVisibleOptioTop="144px"
          optionDefaultVisibleOptioLeft="271px"
        />
        <OptionDefaultVisibleOption
          optionDefaultVisibleOptioPosition="absolute"
          optionDefaultVisibleOptioBorderRadius="unset"
          optionDefaultVisibleOptioBackgroundColor="unset"
          optionDefaultVisibleOptioBorder="unset"
          optionDefaultVisibleOptioBoxSizing="unset"
          optionDefaultVisibleOptioFlexDirection="column"
          optionDefaultVisibleOptioPadding="unset"
          optionDefaultVisibleOptioAlignItems="unset"
          optionDefaultVisibleOptioJustifyContent="unset"
          optionDefaultVisibleOptioGap="unset"
          optionDefaultVisibleOptioTop="144px"
          optionDefaultVisibleOptioLeft="655px"
        />
        <FormContainer1
          iconImageUrl="/icons--arrow--ios--right1.svg"
          imageSize="/icons--arrow--ios--right1.svg"
          imageCode="/icons--arrow--ios--right1.svg"
          modeIconImageUrl="night mode"
          imageDimensions="/icons--settings--setting-21.svg"
          imageCodeImageUrl="/icons--arrow--ios--right1.svg"
          imageCodeDimensions="/icons--arrow--ios--right1.svg"
          imageCodeImageUrl2="/photo3.svg"
          propCursor="pointer"
          onNavButtonLogOutClick={onNavButtonLogOutClick}
          onNavButtonAboutContainerClick={onNavButtonAboutContainerClick}
          onNavButtonContactContainerClick={onNavButtonContactContainerClick}
          onNavButtonSettingContainerClick={onNavButtonSettingContainerClick}
          onNavButtonDashboardContainerClick={
            onNavButtonDashboardContainerClick
          }
        />
        <div className={styles.headingNightMode}>
          <div className={styles.subTittle}>Dashboard</div>
          <div className={styles.tittle}>
            Australia's Construction Material Price Tracker
          </div>
        </div>
        <div className={styles.headingDayMode}>
          <div className={styles.subTittle}>Dashboard</div>
          <div className={styles.tittle}>
            Australia's Construction Material Price Tracker
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default DesktopAllResult;
