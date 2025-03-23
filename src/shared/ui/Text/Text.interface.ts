import { SizeType, ColorType } from "../../config/index.ts";

export interface IText {
  children: React.ReactNode;
  size?: SizeType;
  color?: ColorType;
  className?: string;
}
