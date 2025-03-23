import cx from "classix";
import styles from "./Text.module.scss";
import { IText } from "./Text.interface.ts";

const Text = ({
  children = "",
  size = "small",
  color = "primary",
  className = "",
}: IText) => {
  const cls = cx(
    styles.text,
    styles[`text__${size}`],
    styles[`text__${color}`],
    className,
  );
  return <span className={cls}>{children}</span>;
};

export default Text;
