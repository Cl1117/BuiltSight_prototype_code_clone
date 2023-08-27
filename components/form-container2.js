import TypehLineValue from "./typeh-line-value";
import TypetimeIntervalNumberOf1 from "./typetime-interval-number-of1";
import styles from "./form-container2.module.css";
const FormContainer2 = () => {
  return (
    <div className={styles.chartGrid}>
      <div className={styles.hLinesValues}>
        <div className={styles.horizontalLine}>
          <div className={styles.leftValue}>150M</div>
          <div className={styles.hLine} />
        </div>
        <div className={styles.horizontalLine}>
          <div className={styles.leftValue}>125M</div>
          <div className={styles.hLine} />
        </div>
        <TypehLineValue
          leftValue="+50%"
          typehLineValuePosition="unset"
          typehLineValueWidth="unset"
          typehLineValueAlignItems="center"
          typehLineValueAlignSelf="stretch"
          leftValueColor="#6e7880"
          leftValueLetterSpacing="-0.5px"
          hLineBackgroundColor="#dde3e7"
          hLineFlex="1"
          hLinePosition="relative"
          hLineHeight="1px"
          hLineLineBreak="unset"
          hLineWidth="unset"
        />
        <TypehLineValue
          leftValue="+25%"
          typehLineValuePosition="unset"
          typehLineValueWidth="unset"
          typehLineValueAlignItems="center"
          typehLineValueAlignSelf="stretch"
          leftValueColor="#6e7880"
          leftValueLetterSpacing="-0.5px"
          hLineBackgroundColor="#dde3e7"
          hLineFlex="1"
          hLinePosition="relative"
          hLineHeight="1px"
          hLineLineBreak="unset"
          hLineWidth="unset"
        />
        <TypehLineValue
          leftValue="0%"
          typehLineValuePosition="unset"
          typehLineValueWidth="unset"
          typehLineValueAlignItems="center"
          typehLineValueAlignSelf="stretch"
          leftValueColor="#6e7880"
          leftValueLetterSpacing="unset"
          hLineBackgroundColor="#dde3e7"
          hLineFlex="1"
          hLinePosition="relative"
          hLineHeight="1px"
          hLineLineBreak="unset"
          hLineWidth="unset"
        />
        <TypehLineValue
          leftValue="-25%"
          typehLineValuePosition="unset"
          typehLineValueWidth="unset"
          typehLineValueAlignItems="flex-end"
          typehLineValueAlignSelf="stretch"
          leftValueColor="#6e7880"
          leftValueLetterSpacing="unset"
          hLineBackgroundColor="#c7cfd5"
          hLineFlex="1"
          hLinePosition="relative"
          hLineHeight="1px"
          hLineLineBreak="unset"
          hLineWidth="unset"
        />
      </div>
      <TypetimeIntervalNumberOf1
        oct2022="2023"
        nov2022="2024"
        dec2022="2025"
        showJan2023={false}
        showFeb2023={false}
        showMar2023={false}
        typetimeIntervalNumberOfPosition="unset"
        typetimeIntervalNumberOfWidth="unset"
        typetimeIntervalNumberOfJustifyContent="flex-start"
        typetimeIntervalNumberOfAlignSelf="stretch"
        typetimeIntervalNumberOfPadding="0px var(--padding-24xl)"
        typetimeIntervalNumberOfBoxSizing="border-box"
        typetimeIntervalNumberOfGap="64px"
      />
    </div>
  );
};

export default FormContainer2;
