import { atom } from "jotai";

const currentDate = new Date();
export const timeAtom = atom<string>(
  currentDate.getHours() + ":" + currentDate.getMinutes(),
);
