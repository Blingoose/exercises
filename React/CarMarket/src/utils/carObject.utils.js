export const stringChange = (str) => {
  const changeString =
    str[0].toUpperCase() + str.substring(1).split("_").join(" ");
  return changeString;
};
