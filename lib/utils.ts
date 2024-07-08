//To validate that the input is a string and doesn't exceed the maximum length
export const contactFormInputValidation = (value: any, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};
