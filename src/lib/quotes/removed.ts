const removeD = (arr: string[]) => {
  //Remove Duplicate
  const data = arr.reduce((accumulator: string[], current) => {
    if (!accumulator.find((item) => item === current)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);

  return data;
};

export default removeD;
