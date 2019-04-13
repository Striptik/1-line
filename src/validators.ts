import { len } from "./string";

export const isNil = (item: any): boolean =>
  typeof item === "undefined" || item === null;

export const isNan = (item: any): boolean => typeof item !== "number";

export const is0 = (item: any): boolean => item === 0;
export const isNan0 = (item: any): boolean => isNan(item) || is0(item);
export const isNilStr = (item: any): boolean =>
  typeof item !== "string" || len(item) === 0;
