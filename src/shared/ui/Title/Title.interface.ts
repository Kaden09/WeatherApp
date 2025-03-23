import { ColorType, SizeType, WeightType } from "../../config/index.ts";

export interface ITitle {
  children: React.ReactNode;
  size?: SizeType;
  weight?: WeightType;
  color?: ColorType;
  className?: string;
}
