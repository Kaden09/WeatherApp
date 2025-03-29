import { IAstro } from "../../entities/weather/index.ts";

export function convertTime(time12h: string) {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = modifier === "AM" ? "00" : "12";
  } else if (modifier === "PM") {
    hours = String(parseInt(hours, 10) + 12);
  }
  return `${hours}:${minutes}`;
}

export function getDifference(astro: IAstro, theme: string) {
  if (astro) {
    let sunset = new Date(`2000-01-01T${convertTime(astro.sunset)}`);
    let sunrise = new Date(`2000-01-01T${convertTime(astro.sunrise)}`);
    let moonset = new Date(`2000-01-01T${convertTime(astro.moonset)}`);
    let moonrise = new Date(`2000-01-01T${convertTime(astro.moonrise)}`);
    return theme === "dark"
      ? moonset.getTime() - moonrise.getTime()
      : sunset.getTime() - sunrise.getTime();
  }
}

export function compareTimes(time1: string, time2: string, less: boolean) {
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);

  const date1 = new Date().setHours(hours1, minutes1, 0, 0);
  const date2 = new Date().setHours(hours2, minutes2, 0, 0);

  return less ? date1 < date2 : date1 > date2;
}
