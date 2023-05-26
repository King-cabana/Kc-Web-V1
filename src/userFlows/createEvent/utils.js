// import CryptoJS from "crypto-js";

// // Encrypt the ID
// export const encryptId = (id) => {
//   const encryptedId = CryptoJS.AES.encrypt(
//     id.toString(),
//     "secret-key"
//   ).toString();
//   return encryptedId;
// };

// // Decrypt the ID
// export const decryptId = (encryptedId) => {
//   const decryptedId = CryptoJS.AES.decrypt(encryptedId, "secret-key").toString(
//     CryptoJS.enc.Utf8
//   );
//   return decryptedId;
// };

import CryptoJS from "crypto-js";

// Encrypt the ID
export const encryptId = (id) => {
  const encryptedId = CryptoJS.AES.encrypt(
    id.toString(),
    "secret-key"
  ).toString();
  const encodedId = encodeURIComponent(encryptedId);
  return encodedId;
};

// Decrypt the ID
export const decryptId = (encodedId) => {
  const decodedId = decodeURIComponent(encodedId);
  const decryptedBytes = CryptoJS.AES.decrypt(decodedId, "secret-key");
  const decryptedId = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedId;
};
