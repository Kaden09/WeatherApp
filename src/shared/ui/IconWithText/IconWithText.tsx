import styles from "./IconWithText.module.scss";
import cx from "classix";
import { IIconWithText } from "./IconWithText.interface.ts";

function IconWithText({ icon, children, className }: IIconWithText) {
  const cls = cx(styles["icon-with-text"], className);
  return (
    <div className={cls}>
      {icon}
      {children}
    </div>
  );
}

export default IconWithText;
