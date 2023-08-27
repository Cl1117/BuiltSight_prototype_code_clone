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
import ProjectionAreaChartForm1 from "../components/projection-area-chart-form1";
import FormSection from "../components/form-section";
import FormContainer from "../components/form-container";
import Stateinactive from "../components/stateinactive";
import OptionDefaultVisibleOption3 from "../components/option-default-visible-option3";
import OptionDefaultVisibleOption2 from "../components/option-default-visible-option2";
import OptionDefaultVisibleOption1 from "../components/option-default-visible-option1";
import OptionDefaultVisibleOption from "../components/option-default-visible-option";
import FormContainer1 from "../components/form-container1";
import styles from "./desktop-dashboard-night.module.css";
const DesktopDashboardNight = () => {
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

  const onNavButtonDashboardContainerClick = useCallback(() => {
    router.push("/../pages/desktop-dashboard");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.desktopdashboardNight}>
        <div className={styles.footer}>
          <div className={styles.rectangleCopy103} />
          <div className={styles.logworkAllR}>BuiltSight 2023</div>
        </div>
        <div className={styles.nightModeActiveBg} />
        <div className={styles.dayModeActiveBg} />
        <ProjectionAreaChartForm1 />
        <FormSection />
        <FormContainer showHistiryRow={false} />
        <div className={styles.resultSection}>
          <div className={styles.bg} />
          <div className={styles.resultRow}>
            <div className={styles.aggregateBlueMetal}>
              Aggregate Blue Metal 20 mm
            </div>
            <div className={styles.mm}>mm</div>
            <div className={styles.div}>+5%</div>
          </div>
          <div className={styles.tableHead}>
            <div className={styles.bg1} />
            <div className={styles.materialName}>{`Material name `}</div>
            <div className={styles.unit}>Unit</div>
            <div className={styles.priceChangeIn}>Price change in %</div>
          </div>
          <div className={styles.tittle}>result</div>
        </div>
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
          iconImageUrl="/icons--arrow--ios--right.svg"
          imageSize="/icons--arrow--ios--right.svg"
          imageCode="/icons--arrow--ios--right.svg"
          modeIconImageUrl="Night mode"
          imageDimensions="/icons--settings--setting-2.svg"
          imageCodeImageUrl="/icons--arrow--ios--right.svg"
          imageCodeDimensions="/icons--arrow--ios--right.svg"
          imageCodeImageUrl2="/photo4.svg"
          propCursor="unset"
          onNavButtonLogOutClick={onNavButtonLogOutClick}
          onNavButtonAboutContainerClick={onNavButtonAboutContainerClick}
          onNavButtonContactContainerClick={onNavButtonContactContainerClick}
          onNavButtonDashboardContainerClick={
            onNavButtonDashboardContainerClick
          }
        />
        <div className={styles.headingNightMode}>
          <div className={styles.subTittle}>Dashboard</div>
          <div className={styles.tittle1}>
            Australia's Construction Material Price Tracker
          </div>
        </div>
        <div className={styles.headingDayMode}>
          <div className={styles.subTittle}>Dashboard</div>
          <div className={styles.tittle1}>
            Australia's Construction Material Price Tracker
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default DesktopDashboardNight;
