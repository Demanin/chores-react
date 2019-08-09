import crypto from "crypto";

export const getRandomString = (length = 20) => {
  return crypto.randomBytes(length).toString('hex');
}
