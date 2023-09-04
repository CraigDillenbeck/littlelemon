
/*
Copied from Ephrem2166 on github. Coursera's provided API link does not exist anymore. 
Many github projects for Coursera's Meta Front-End capstone project used this API.
*/ 

const seededRandom = (seed) => {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return () => {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = (date) => {
  let result = [];
  let dt = new Date(date);
  let seed = dt.getDate();

  let random = seededRandom(seed);
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

export const submitAPI = (formData) => {
  return true;
}