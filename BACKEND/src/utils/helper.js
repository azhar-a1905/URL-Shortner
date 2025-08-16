import { nanoid } from "nanoid";
export const generateNanoId = (length) => {
  // const { nanoid } = require("nanoid");
  return nanoid(length);
};
