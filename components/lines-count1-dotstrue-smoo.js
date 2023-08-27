import { useMemo } from "react";
import styles from "./lines-count1-dotstrue-smoo.module.css";
const LinesCount1DotstrueSmoo = ({
  linesCount1DotstrueSmooLi,
  linesCount1DotstrueSmooPosition,
  linesCount1DotstrueSmooWidth,
  linesCount1DotstrueSmooHeight,
  linesCount1DotstrueSmooTop,
  linesCount1DotstrueSmooRight,
  linesCount1DotstrueSmooBottom,
  linesCount1DotstrueSmooLeft,
  linesCount1DotstrueSmooMaxWidth,
  linesCount1DotstrueSmooOverflow,
  linesCount1DotstrueSmooMaxHeight,
}) => {
  const linesCount1DotstrueSmooStyle = useMemo(() => {
    return {
      position: linesCount1DotstrueSmooPosition,
      width: linesCount1DotstrueSmooWidth,
      height: linesCount1DotstrueSmooHeight,
      top: linesCount1DotstrueSmooTop,
      right: linesCount1DotstrueSmooRight,
      bottom: linesCount1DotstrueSmooBottom,
      left: linesCount1DotstrueSmooLeft,
      maxWidth: linesCount1DotstrueSmooMaxWidth,
      overflow: linesCount1DotstrueSmooOverflow,
      maxHeight: linesCount1DotstrueSmooMaxHeight,
    };
  }, [
    linesCount1DotstrueSmooPosition,
    linesCount1DotstrueSmooWidth,
    linesCount1DotstrueSmooHeight,
    linesCount1DotstrueSmooTop,
    linesCount1DotstrueSmooRight,
    linesCount1DotstrueSmooBottom,
    linesCount1DotstrueSmooLeft,
    linesCount1DotstrueSmooMaxWidth,
    linesCount1DotstrueSmooOverflow,
    linesCount1DotstrueSmooMaxHeight,
  ]);

  return (
    <img
      className={styles.linesCount1DotstrueSmoo}
      alt=""
      src={linesCount1DotstrueSmooLi}
      style={linesCount1DotstrueSmooStyle}
    />
  );
};

export default LinesCount1DotstrueSmoo;
