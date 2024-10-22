export const callFunctionWithInterval = (
  fn: () => void,
  interval: number = 20000
): void => {
  // Set the interval to call the passed function every `interval` milliseconds
  setInterval(fn, interval);
};
