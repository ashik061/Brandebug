const capitalizeFirstLetter = (string: string) => {
  const cleanString = string.replace(/^\//, "");
  return cleanString.charAt(0).toUpperCase() + cleanString.slice(1);
};

export { capitalizeFirstLetter };
