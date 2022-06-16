import { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  content: string;
  children: JSX.Element;
}
const Tooltip = ({ content, children }: Props): JSX.Element => {
  let timeout: any;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={styles["tooltip-wrapper"]}
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <div className={`${styles["tooltip-tip"]} ${styles.top}`}>
          {/* Content */}
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
