import cx from "classix";
import styles from "./Title.module.scss";
import { ITitle } from "./Title.interface.ts";

const Title = ({
  children = "",
  size = "small",
  weight = "semiBold",
  color = "primary",
  className = "",
}: ITitle) => {
  const cls = cx(
    styles.title,
    styles[`title__${weight}`],
    styles[`title__${size}`],
    styles[`title__${color}`],
    className,
  );
  return <h3 className={cls}>{children}</h3>;
};

export default Title;
