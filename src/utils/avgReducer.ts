const avgReducer = (
  acc: number,
  curr: number,
  index: number,
  arr: number[]
): number => {
  acc += curr;
  if (index + 1 === arr.length)
    return parseFloat((acc / arr.length).toFixed(2));
  return acc;
};
export default avgReducer;