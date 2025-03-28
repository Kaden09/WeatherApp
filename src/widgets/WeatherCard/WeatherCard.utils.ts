import { WEEK_DAYS, MONTHS } from "../../shared/constants/index.ts";

export function getFormattedDate(month: number, date: number) {
  return `${MONTHS[month]} ${date}`;
}

export function getWeekDayName(day: number, isToday: boolean) {
  return isToday ? "Today" : WEEK_DAYS[day];
}
