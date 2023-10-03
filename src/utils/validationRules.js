export const isRequired = (val) => ({
  hasPassed: val !== "",
  message: "Please fill in the form",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "You have exceeded the limit",
});
export const emailValidation = (val) => ({
  hasPassed: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(val),
  message: "Wrong email",
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
  message: "The password must contain one number and one symbol",
});
