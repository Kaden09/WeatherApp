import { atomWithStorage } from "jotai/utils";

export const timeAtom = atomWithStorage<string>("time", "00:00");
