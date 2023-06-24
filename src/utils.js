import CryptoJS from "crypto-js";

// Encrypt the ID
export const encryptId = (id) => {
  const encryptedId = CryptoJS?.AES?.encrypt(
    id?.toString(),
    "secret-key"
  )?.toString();
  const encodedId = encodeURIComponent(encryptedId);

  return encodedId;
};

// Decrypt the ID
export const decryptId = (encodedId) => {
  const decodedId = decodeURIComponent(encodedId);
  const decryptedBytes = CryptoJS?.AES?.decrypt(decodedId, "secret-key");
  const decryptedId = decryptedBytes?.toString(CryptoJS.enc.Utf8);

  return decryptedId;
};

// convert date
export function formatDate(date) {
  const newDate = new Date(date);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = newDate?.toLocaleDateString("en-US", options);

  return formattedDate;
}

// convert time
export const formatTime = (time) => {
  if (!time) {
    return "Invalid Time";
  } else {
    const newTime = new Date(`1970-01-01T${time}Z`);
    const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
    const formattedTime = newTime?.toLocaleTimeString("en-US", timeOptions);
    return formattedTime;
  }
};

// Upcoming, expiren and ongoing event check
export const getEventStatus = (eventStartDate, eventEndDate) => {
  const today = new Date()?.toISOString()?.split("T")[0]; // Get today's date in YYYY-MM-DD format
  if (!eventStartDate && !eventEndDate) {
    return "---"; // Return an error message if both dates are missing
  }
  if (eventStartDate && eventEndDate) {
    if (eventStartDate <= today && eventEndDate >= today) {
      return <span style={{ color: "#dfbf06" }}>ongoing</span>;
    } else if (eventStartDate > today) {
      return <span style={{ color: "green" }}>upcoming</span>;
    } else {
      return <span style={{ color: "red" }}>expired</span>;
    }
  } else if (eventStartDate && eventStartDate >= today) {
    return <span style={{ color: "green" }}>upcoming</span>;
  } else if (eventEndDate && eventEndDate >= today) {
    return <span style={{ color: "green" }}>upcoming</span>;
  } else {
    return <span style={{ color: "red" }}>expired</span>;
  }
};
