import { WEEK_DAYS, MONTHS } from "../../shared/constants/index.ts";

export function getFormattedDate(
  month: number,
  date: number,
  isMobile: boolean,
) {
  return `${isMobile ? MONTHS[month].substring(0, 3) : MONTHS[month]} ${date}`;
}

export function getWeekDayName(day: number, isToday: boolean) {
  return isToday ? "Today" : WEEK_DAYS[day];
}
