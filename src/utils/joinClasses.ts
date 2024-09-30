export const joinClasses = (...classes: string[]) => {
  return classes.filter((c) => !!c).join(" ");
};
