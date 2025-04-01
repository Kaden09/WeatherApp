import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

export const cityAtom = atomWithStorage<string>("city", "Budennovsk, Europe");
export const isLoadingAtom = atom(false);
