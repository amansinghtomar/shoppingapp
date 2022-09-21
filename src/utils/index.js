export const isRequired = (value) => {
   return value != null && value.trim().length > 0;
};

export const emailValidate = (value) => {
   if (!isRequired(value)) {
      return "This is a required field";
   } else if (!new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(value)) {
      return "Email is badly formated";
   } else return "";
};

export const passwordValidator = (value) => {
   if (!isRequired(value)) {
      return "This is a required field";
   } else if (value.length < 6) {
      return "Password length is lesser than 6 character";
   } else return "";
};

export const nameValidator = (value) => {
   return !isRequired(value) ? "This is a required field" : "";
};

export const mobileValidator = (value) => {
   if (!isRequired(value)) {
      return "This is a required field";
   } else if (value.length < 10) {
      return "Mobile number is less than 10 character";
   } else return "";
};

export const rePasswordValidator = (value, password) => {
   if (!isRequired(value)) {
      return "This is a required field";
   } else if (value !== password) {
      return "Password is not matching";
   } else return "";
};

export const compareobjects = (val1, val2) => {
   return !(JSON.stringify(val1) === JSON.stringify(val2));
};
