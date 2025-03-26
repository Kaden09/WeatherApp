import styles from "./IconWithText.module.scss";
import {IIconWithText} from "./IconWithText.interface.ts";

function IconWithText({icon, children}: IIconWithText) {
	return (
		<div className={styles["icon-with-text"]}>
			{icon}
			{children}
		</div>
	)
}

export default IconWithText;
