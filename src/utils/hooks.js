export const useCapitalized = (string) => {
  const modeString = string.charAt(0).toUpperCase() + string.slice(1);
  const words = modeString.split("-");

  const finalString = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return finalString;
};
