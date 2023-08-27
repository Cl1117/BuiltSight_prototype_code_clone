import Head from "next/head";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  Dropdown as BsDropdown,
  DropdownButton as BsDropdownButton,
  SplitButton as BsSplitButton,
} from "react-bootstrap";
import ProjectionAreaChartForm1 from "../components/projection-area-chart-form1";
import FormSection from "../components/form-section";
import FormContainer from "../components/form-container";
import ResultContainer from "../components/result-container";
import Stateinactive from "../components/stateinactive";
import OptionDefaultVisibleOption3 from "../components/option-default-visible-option3";
import OptionDefaultVisibleOption2 from "../components/option-default-visible-option2";
import OptionDefaultVisibleOption1 from "../components/option-default-visible-option1";
import OptionDefaultVisibleOption from "../components/option-default-visible-option";
import LogoutForm from "../components/logout-form";
import styles from "./desktop-dashboard.module.css";
const DesktopDashboard = () => {
  const [
    dropdownEndingDateDateTimePickerValue,
    setDropdownEndingDateDateTimePickerValue,
  ] = useState(null);
  const [
    dropdownStartingDateDateTimePickerValue,
    setDropdownStartingDateDateTimePickerValue,
  ] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <Head>
          <title>BuiltSight</title>
          <meta
            name="description"
            content="Australia's Construction Material Price Tracker"
          />
        </Head>
        <div className={styles.desktopdashboard}>
          <div className={styles.footer}>
            <div className={styles.rectangleCopy103} />
            <div className={styles.logworkAllR}>BuiltSight 2023</div>
          </div>
          <div className={styles.nightModeActiveBg} />
          <div className={styles.dayModeActiveBg} />
          <ProjectionAreaChartForm1 />
          <FormSection />
          <FormContainer showHistiryRow={false} />
          <ResultContainer showResultRow={false} />
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
          <LogoutForm />
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
      </>
    </LocalizationProvider>
  );
};

export default DesktopDashboard;
