import { ClockIcon } from "../../../assets/index.ts";
import { Title, Clock, IconWithText } from "../index.ts";
import { WEEK_DAYS } from "../../constants/weekDays.ts";

function RealTimeClock() {
  return (
    <IconWithText icon={<ClockIcon />}>
      <Title size="middle">{WEEK_DAYS[new Date().getDay()]}, </Title>
      <Clock />
    </IconWithText>
  );
}

export default RealTimeClock;
