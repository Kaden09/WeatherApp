import { atomWithStorage } from "jotai/utils";

export const cityAtom = atomWithStorage<string>("city", "Budennovsk, Europe");
